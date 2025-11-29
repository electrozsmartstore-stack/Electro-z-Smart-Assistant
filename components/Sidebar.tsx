
import React from 'react';
import { ElectrozLogo } from './icons/ElectrozLogo';
import { HomeIcon, SofaIcon, BedIcon, KitchenIcon, StoreIcon, MailIcon } from './icons/DashboardIcons';
import { Platform } from '../types';

interface SidebarProps {
  // FIX: The `icon` prop type was made more specific to resolve a TypeScript error when using React.cloneElement.
  platforms: { id: Platform; name: string; icon: React.ReactElement<React.SVGProps<SVGSVGElement>> }[];
  loggedInPlatforms: Set<Platform>;
  onConnect: (platform: Platform) => void;
  activeRoom: string;
  onRoomChange: (room: string) => void;
}

const rooms = [
  { name: 'All Rooms', icon: <HomeIcon className="h-5 w-5" /> },
  { name: 'Living Room', icon: <SofaIcon className="h-5 w-5" /> },
  { name: 'Bedroom', icon: <BedIcon className="h-5 w-5" /> },
  { name: 'Kitchen', icon: <KitchenIcon className="h-5 w-5" /> },
];

const NavLink: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
}> = ({ icon, label, isActive, onClick, href }) => {
  const commonClasses = 'flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors';
  const activeClasses = 'bg-blue-600 text-white';
  const inactiveClasses = 'text-slate-300 hover:bg-slate-700 hover:text-white';
  
  const content = (
    <>
      {icon}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${commonClasses} ${inactiveClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${commonClasses} ${isActive ? activeClasses : inactiveClasses} w-full text-left`}>
      {content}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ platforms, loggedInPlatforms, onConnect, activeRoom, onRoomChange }) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-slate-800 p-6 flex flex-col space-y-8">
      <header className="flex justify-center">
        <ElectrozLogo className="h-16 w-auto" />
      </header>

      <nav className="flex-1 space-y-8">
        <div>
          <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Rooms</h3>
          <div className="mt-2 space-y-1">
            {rooms.map(room => (
              <NavLink 
                key={room.name} 
                icon={room.icon} 
                label={room.name} 
                isActive={activeRoom === room.name}
                onClick={() => onRoomChange(room.name)} 
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="px-3 text-xs font-semibold text-orange-400 uppercase tracking-wider">Integrations</h3>
          <div className="mt-2 space-y-2">
            {platforms.map(p => (
              <div key={p.id} className="flex items-center justify-between px-3 py-1.5">
                <div className="flex items-center space-x-3 text-sm font-medium text-slate-300">
                  {React.cloneElement(p.icon, { className: 'h-5 w-5' })}
                  <span>{p.name}</span>
                </div>
                {loggedInPlatforms.has(p.id) ? (
                   <span className="text-xs font-semibold text-green-400">Connected</span>
                ) : (
                  <button onClick={() => onConnect(p.id)} className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-500 transition-colors">
                    Connect
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex-shrink-0">
        <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Support</h3>
        <div className="mt-2 space-y-1">
          <NavLink href="https://electro-z-smart.com/" icon={<StoreIcon className="h-5 w-5" />} label="Visit Store" />
          <NavLink href="mailto:electrozsmartstore@gmail.com" icon={<MailIcon className="h-5 w-5" />} label="Contact Support" />
        </div>
      </div>
      
      <div className="text-center text-xs text-slate-500">
          <p>ELECTRO Z Smart</p>
          <p>ENG: WAEL ZHRAN</p>
          <p>وزير السمارت</p>
      </div>
    </aside>
  );
};
