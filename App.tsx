
import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { LoginModal } from './components/LoginModal';
import { Platform } from './types';
import { AlexaIcon } from './components/icons/AlexaIcon';
import { TuyaIcon } from './components/icons/TuyaIcon';
import { EwelinkIcon } from './components/icons/EwelinkIcon';

const platformData = [
  {
    id: Platform.ALEXA,
    name: 'Alexa',
    icon: <AlexaIcon />,
  },
  {
    id: Platform.TUYA,
    name: 'Tuya',
    icon: <TuyaIcon />,
  },
  {
    id: Platform.EWELINK,
    name: 'eWeLink',
    icon: <EwelinkIcon />,
  },
];

const App: React.FC = () => {
  const [loggedInPlatforms, setLoggedInPlatforms] = useState<Set<Platform>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState<Platform | null>(null);
  const [activeRoom, setActiveRoom] = useState('All Rooms');

  const handleConnectClick = useCallback((platform: Platform) => {
    setCurrentPlatform(platform);
    setIsModalOpen(true);
  }, []);

  const handleLoginSubmit = useCallback(() => {
    if (currentPlatform) {
      setLoggedInPlatforms(prev => new Set(prev).add(currentPlatform));
    }
    setIsModalOpen(false);
    setCurrentPlatform(null);
  }, [currentPlatform]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentPlatform(null);
  }, []);

  const currentPlatformInfo = platformData.find(p => p.id === currentPlatform);

  return (
    <div className="flex h-screen bg-slate-900 text-gray-300 font-sans antialiased">
      <Sidebar
        platforms={platformData}
        loggedInPlatforms={loggedInPlatforms}
        onConnect={handleConnectClick}
        activeRoom={activeRoom}
        onRoomChange={setActiveRoom}
      />
      <main className="flex-1 p-8 md:p-10 overflow-y-auto">
        <MainContent
          activeRoom={activeRoom}
          isAnyPlatformConnected={loggedInPlatforms.size > 0}
        />
      </main>
      
      {currentPlatformInfo && (
        <LoginModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleLoginSubmit}
          platformName={currentPlatformInfo.name}
          platformIcon={React.cloneElement(currentPlatformInfo.icon, { className: 'h-20 w-20' })}
        />
      )}
    </div>
  );
};

export default App;
