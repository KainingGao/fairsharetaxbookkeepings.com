import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Notification = ({ show, type, message, onClose }: NotificationProps) => {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="relative bg-white rounded-lg shadow-xl p-4 min-w-80">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg blur opacity-25"></div>
        <div className="relative flex items-start space-x-4">
          {type === 'success' ? (
            <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5" />
          ) : (
            <XCircle className="h-6 w-6 text-red-600 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="text-gray-800">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;