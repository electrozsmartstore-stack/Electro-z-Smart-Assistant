import React from 'react';

interface SceneCardProps {
  // FIX: The `icon` prop type was made more specific to resolve a TypeScript error when using React.cloneElement.
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export const SceneCard: React.FC<SceneCardProps> = ({ icon, title }) => {
  return (
    <button className="bg-slate-800 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 aspect-video hover:bg-slate-700/70 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500">
      <div className="text-cyan-400">
        {React.cloneElement(icon, { className: 'h-7 w-7' })}
      </div>
      <span className="font-medium text-slate-300 text-sm">{title}</span>
    </button>
  );
};