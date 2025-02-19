import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface Thread {
  threadId: string;
  createdAt: string;
  messageCount: number;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentThreadId, setCurrentThreadId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const createNewThread = async () => {
    try {
      const response = await fetch('https://fairshare-backend-sean.onrender.com/api/chat/thread', {
        method: 'POST',
      });
      const data = await response.json();
      setCurrentThreadId(data.threadId);
      return data.threadId;
    } catch (error) {
      console.error('Error creating thread:', error);
      return null;
    }
  };

  const sendMessage = async (threadId: string, content: string) => {
    try {
      const response = await fetch('https://fairshare-backend-sean.onrender.com/api/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          threadId,
          message: content,
        }),
      });
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error sending message:', error);
      return null;
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const threadId = currentThreadId || await createNewThread();
    if (!threadId) return;

    // Add user message to the chat
    const userMessage: Message = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    // Get assistant's response
    const response = await sendMessage(threadId, message);
    setIsLoading(false);
    
    if (response) {
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Calculate responsive dimensions
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const isMobile = screenWidth < 640;
  const chatWidth = isMobile ? '100%' : Math.min(400, screenWidth * 0.3);
  const chatHeight = isMobile ? 'calc(100vh - 80px)' : Math.min(600, window.innerHeight * 0.7);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          style={{ 
            width: chatWidth,
            height: chatHeight,
            bottom: isMobile ? '80px' : '80px',
            right: isMobile ? '0' : '0',
            position: 'fixed',
          }}
          className="bg-white rounded-lg shadow-xl flex flex-col"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-semibold">Chat with Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <ReactMarkdown 
                    className={`prose prose-sm max-w-none prose-p:my-0 prose-headings:my-0 ${
                      msg.role === 'assistant' ? 'text-gray-900' : ''
                    }`}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
                  <span className="text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows={2}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className={`p-2 bg-teal-500 text-white rounded-lg transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-600'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;