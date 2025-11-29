
import React from 'react';
import type { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
  name: string;
  icon: React.ReactNode;
  description: string;
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  color: string;
  glow: string;
}

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  icon,
  description,
  isConnected,
  onConnect,
  onDisconnect,
  color,
  glow
}) => {
  const baseClasses = "relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2";
  const connectedClasses = `border-green-400/50 ${glow}`;

  return (
    <div className={`${baseClasses} ${isConnected ? connectedClasses : color}`}>
      {isConnected && (
        <div className="absolute top-4 right-4 text-green-400 flex items-center space-x-1 text-sm">
          <CheckCircleIcon className="h-5 w-5" />
          <span>Connected</span>
        </div>
      )}
      <div className="mb-4">{icon}</div>
      {/* The name is now part of the icon */}
      <p className="text-slate-400 flex-grow mb-6">{description}</p>
      
      {isConnected ? (
        <button
          onClick={onDisconnect}
          className="w-full mt-auto bg-red-600/80 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={onConnect}
          className="w-full mt-auto bg-cyan-600/80 text-white font-semibold py-3 px-4 rounded-lg hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Connect
        </button>
      )}
    </div>
  );
};
