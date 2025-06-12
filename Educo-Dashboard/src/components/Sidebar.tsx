


import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import EducoLogo from '../assets/Educo_logo.png';
import { RxDashboard } from 'react-icons/rx';
import { FaBook } from 'react-icons/fa';
import { TbClipboardText } from 'react-icons/tb';
import { LuMessageSquareMore } from 'react-icons/lu';
import { GoBell } from 'react-icons/go';
import { LuCalendarDays } from 'react-icons/lu';
import { PiUsersThreeBold } from 'react-icons/pi';
import { IoSettingsOutline } from 'react-icons/io5';

const navItems = [
  { label: 'Dashboard', icon: <RxDashboard />, route: '/' },
  { label: 'My Courses', icon: <FaBook />, route: '/courses' },
  { label: 'My Classes', icon: <TbClipboardText />, route: '/classes' },
  { label: 'Messages', icon: <LuMessageSquareMore />, route: '/messages' },
  { label: 'Notifications', icon: <GoBell />, route: '/notifications', badge: 2 },
  { label: 'Calendars', icon: <LuCalendarDays />, route: '/calendar' },
  { label: 'Community', icon: <PiUsersThreeBold />, route: '/community' },
  { label: 'Settings', icon: <IoSettingsOutline />, route: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-full shadow"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open sidebar"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0  z-40 bg-slate-900 text-white flex flex-col py-2 rounded-r-3xl transition-transform duration-300
          w-60 ml-0 mt-0 mb-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:translate-x-0 lg:rounded-3xl lg:ml-8 lg:mt-6 lg:mb-12
        `}
      >
        <img className="mb-10 w-40 h-16 mx-auto mt-8 lg:mt-0" src={EducoLogo} alt="EDUCO Logo" />
        <nav className="flex flex-col gap-4 px-4">
          {navItems.map(({ label, icon, route, badge }) => {
            const isActive = location.pathname === route;
            return (
              <Link
                key={label}
                to={route}
                className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer transition-all 
                  ${
                    isActive
                      ? 'bg-lime-300 text-black font-semibold' 
                      : 'hover:bg-white/10' 
                  }
                  no-underline text-white
                `}
                onClick={() => setOpen(false)}
              >
                <span className="text-lg">{icon}</span>
                <span className="flex-1">{label}</span>
                {badge && (
                  <span className="text-xs bg-red-300 rounded-full px-2 py-1 ml-auto">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
