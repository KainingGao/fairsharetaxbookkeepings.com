import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import ChatWidget from '../components/ChatWidget';
import Notification from '../components/Notification';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name: (e.currentTarget.querySelector('#name') as HTMLInputElement).value,
      email: (e.currentTarget.querySelector('#email') as HTMLInputElement).value,
      message: (e.currentTarget.querySelector('#message') as HTMLTextAreaElement).value,
    };
  
    try {
      const response = await fetch('https://fairshare-backend-sean.onrender.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Clear form
        (e.target as HTMLFormElement).reset();
        // Show success notification
        setNotification({
          show: true,
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <Notification
        show={notification.show}
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification(prev => ({ ...prev, show: false }))}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Choose your preferred way to reach us.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <Mail className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <a 
                  href="mailto:info@fairsharetaxbookkeepings.com"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  info@fairsharetaxbookkeepings.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <Phone className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <a 
                  href="tel:+15153379289"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  (515) 337-9289
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="group">
            <div className="relative transform transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <Clock className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600">Tuesday - Sunday: 9am - 6pm</p>
                <p className="text-gray-600">Monday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
      <div className="max-w-2xl mx-auto mb-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-lg">
            {/* Gradient background effect */}
            <div className="absolute inset-0 -z-10 rounded-3xl opacity-75 blur-2xl bg-gradient-to-br from-teal-300 via-emerald-300 to-teal-400"></div>
            
            {/* Name Input */}
            <div className="relative backdrop-blur-xl bg-white/50 p-5 rounded-3xl mb-6 border border-white/50 shadow-md">
              <label htmlFor="name" className="block ml-2 text-sm uppercase font-bold text-gray-800">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 rounded-3xl bg-white/90 transition-all duration-300 outline-none focus:bg-gray-900 focus:text-white hover:bg-gray-900 hover:text-white border border-transparent hover:border-gray-600"
              />
              <p className="mt-1 text-xs text-center font-semibold text-gray-600">
                How should we address you?
              </p>
            </div>

            {/* Email Input */}
            <div className="relative backdrop-blur-xl bg-white/50 p-5 rounded-3xl mb-6 border border-white/50 shadow-md">
              <label htmlFor="email" className="block ml-2 text-sm uppercase font-bold text-gray-800">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 rounded-3xl bg-white/90 transition-all duration-300 outline-none focus:bg-gray-900 focus:text-white hover:bg-gray-900 hover:text-white border border-transparent hover:border-gray-600"
              />
              <p className="mt-1 text-xs text-center font-semibold text-gray-600">
                Where can we reach you?
              </p>
            </div>

            {/* Message Input */}
            <div className="relative backdrop-blur-xl bg-white/50 p-5 rounded-3xl mb-6 border border-white/50 shadow-md">
              <label htmlFor="message" className="block ml-2 text-sm uppercase font-bold text-gray-800">
                Message
              </label>
              <textarea
                required
                id="message"
                rows={4}
                placeholder="Type your message here"
                className="mt-1 w-full px-4 py-2 rounded-3xl bg-white/90 transition-all duration-300 outline-none focus:bg-gray-900 focus:text-white hover:bg-gray-900 hover:text-white resize-none border border-transparent hover:border-gray-600"
              ></textarea>
              <p className="mt-1 text-xs text-center font-semibold text-gray-600">
                What would you like to tell us?
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-white/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>


        {/* AI Chat Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Need Quick Answers?
            </h2>
            <p className="text-gray-600 mb-4">
              Try our AI assistant for immediate responses to common questions. For complex inquiries, please contact us directly using the form above.
            </p>
          </div>

          {/* ChatWidget will be automatically rendered by the App component */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="text-center text-gray-600">
              <p>Our AI assistant is available 24/7 to help answer your questions.</p>
              <p>Click the chat icon in the bottom right corner to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;