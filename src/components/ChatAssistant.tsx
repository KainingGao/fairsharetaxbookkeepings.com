// import React, { useState, useEffect, useRef } from 'react';
// import { MessageCircle, X, Send } from 'lucide-react';

// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// const ChatAssistant = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const chatWindowRef = useRef<HTMLDivElement>(null);
//   const [threadId, setThreadId] = useState<string>(localStorage.getItem('chatThreadId') || '');

//   useEffect(() => {
//     // Auto-open chat after 3 seconds if not already clicked
//     const timer = setTimeout(() => {
//       if (!isOpen && !localStorage.getItem('chatDismissed')) {
//         setIsOpen(true);
//       }
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [isOpen]);

//   useEffect(() => {
//     // Initialize thread if none exists
//     const initializeThread = async () => {
//       if (!threadId) {
//         try {
//           const response = await fetch('https://fairshare-backend-sean.onrender.com/api/chat/thread', {
//             method: 'POST'
//           });
//           const data = await response.json();
//           setThreadId(data.threadId);
//           localStorage.setItem('chatThreadId', data.threadId);
//         } catch (error) {
//           console.error('Error creating thread:', error);
//         }
//       }
//     };

//     initializeThread();
//   }, [threadId]);

//   useEffect(() => {
//     // Scroll to bottom when new messages arrive
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleClose = () => {
//     setIsOpen(false);
//     localStorage.setItem('chatDismissed', 'true');
//   };

//   const handleSendMessage = async () => {
//     if (!newMessage.trim() || !threadId) return;

//     const userMessage = newMessage.trim();
//     setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
//     setNewMessage('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('https://fairshare-backend-sean.onrender.com/api/chat/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           threadId,
//           message: userMessage
//         })
//       });

//       const data = await response.json();
//       setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setMessages(prev => [...prev, { 
//         role: 'assistant', 
//         content: 'Sorry, I encountered an error. Please try again.' 
//       }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Load chat history on initial mount
//   useEffect(() => {
//     const loadChatHistory = async () => {
//       if (!threadId) return;
      
//       try {
//         const response = await fetch(`https://fairshare-backend-sean.onrender.com/api/chat/history/${threadId}`);
//         const history = await response.json();
//         setMessages(history);
//       } catch (error) {
//         console.error('Error loading chat history:', error);
//       }
//     };

//     loadChatHistory();
//   }, [threadId]);

//   return (
//     <>
//       {/* Floating Button with Animation */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center transition-transform hover:scale-110 ${
//           isOpen ? 'hidden' : ''
//         }`}
//       >
//         <div className="absolute w-full h-full rounded-full animate-pulse bg-gradient-to-r from-teal-300 to-emerald-300 opacity-50" />
//         <MessageCircle className="w-8 h-8 text-white relative z-10" />
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div 
//           ref={chatWindowRef}
//           className="fixed right-0 top-0 z-50 h-screen bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden md:w-1/2 w-full"
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-4 flex justify-between items-center">
//             <h2 className="text-white text-xl font-semibold">Fairshare Assistant</h2>
//             <button
//               onClick={handleClose}
//               className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Messages Container */}
//           <div className="h-[calc(100vh-8rem)] overflow-y-auto p-4 space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.role === 'user' ? 'justify-end' : 'justify-start'
//                 }`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-lg p-3 ${
//                     message.role === 'user'
//                       ? 'bg-teal-500 text-white'
//                       : 'bg-gray-100 text-gray-800'
//                   }`}
//                 >
//                   {message.content}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-100 rounded-lg p-3 space-x-2 flex items-center">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Type your message..."
//                 className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={isLoading || !newMessage.trim()}
//                 className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatAssistant;