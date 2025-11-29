
import React from 'react';
import { SceneCard } from './SceneCard';
import { SunIcon, MovieIcon, MoonIcon, AwayIcon } from './icons/DashboardIcons';

interface MainContentProps {
  activeRoom: string;
  isAnyPlatformConnected: boolean;
}

const scenes = [
  { name: 'Good Morning', icon: <SunIcon /> },
  { name: 'Movie Night', icon: <MovieIcon /> },
  { name: 'Good Night', icon: <MoonIcon /> },
  { name: 'Away', icon: <AwayIcon /> },
];

export const MainContent: React.FC<MainContentProps> = ({ activeRoom, isAnyPlatformConnected }) => {
  return (
    <div className="w-full">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{activeRoom}</h1>
        <p className="mt-1 text-slate-400">Manage your scenes and devices.</p>
      </header>

      <section className="mt-8 md:mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-white">Quick Scenes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
          {scenes.map(scene => (
            <SceneCard key={scene.name} icon={scene.icon} title={scene.name} />
          ))}
        </div>
      </section>

      <section className="mt-8 md:mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-white">Devices</h2>
        <div className="mt-4 p-6 bg-slate-800 rounded-lg min-h-[200px] flex items-center justify-center">
          {isAnyPlatformConnected ? (
            <p className="text-slate-400">Your connected devices would appear here.</p>
          ) : (
            <div className="text-center">
              <h3 className="font-semibold text-white">Please connect a platform account.</h3>
              <p className="text-sm text-slate-400 mt-1">Use the "Integrations" section in the sidebar to log in.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
