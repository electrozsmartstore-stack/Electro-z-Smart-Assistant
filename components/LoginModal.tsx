
import React, { Fragment } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  platformName: string;
  platformIcon: React.ReactNode;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  platformName,
  platformIcon,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md p-8 m-4 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <div className="flex flex-col items-center text-center">
            {platformIcon}
            <h2 className="text-2xl font-bold text-white mt-4 mb-2">Connect to {platformName}</h2>
            <p className="text-slate-400 mb-6">Enter your credentials to link your account.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={`user@${platformName.toLowerCase()}.com`}
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              defaultValue="password123"
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
            />
          </div>
          <p className="text-xs text-slate-500 text-center mb-6">
            This is a simulated login for demonstration purposes. Clicking 'Connect' will link the account.
          </p>
          <div className="flex items-center justify-between space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-slate-600/80 text-white font-semibold py-3 px-4 rounded-lg hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-cyan-600/80 text-white font-semibold py-3 px-4 rounded-lg hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Connect
            </button>
          </div>
        </form>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
