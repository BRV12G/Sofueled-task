// // src/components/Sidebar.tsx
// import { FaBook } from 'react-icons/fa';
// import EducoLogo from '../assets/Educo_logo.png';
// import { RxDashboard } from 'react-icons/rx';
// import { TbClipboardText } from 'react-icons/tb';
// import { LuMessageSquareMore } from 'react-icons/lu';
// import { GoBell } from 'react-icons/go';
// import { LuCalendarDays } from 'react-icons/lu';
// import { PiUsersThreeBold } from 'react-icons/pi';
// import { IoSettingsOutline } from 'react-icons/io5';

// type NavItem = {
//   label: string;
//   icon: JSX.Element;
//   route: string;
//   badge?: number;
// };

// type SidebarProps = {
//   activeRoute: string; // 'dashboard', 'courses', etc.
// };

// const navItems: NavItem[] = [
//   { label: 'Dashboard', icon: <RxDashboard />, route: 'dashboard' },
//   { label: 'My Courses', icon: <FaBook />, route: 'courses' },
//   { label: 'My Classes', icon: <TbClipboardText />, route: 'classes' },
//   { label: 'Messages', icon: <LuMessageSquareMore />, route: 'messages' },
//   { label: 'Notifications', icon: <GoBell />, route: 'notifications', badge: 2 },
//   { label: 'Calendars', icon: <LuCalendarDays />, route: 'calendar' },
//   { label: 'Community', icon: <PiUsersThreeBold />, route: 'community' },
//   { label: 'Settings', icon: <IoSettingsOutline />, route: 'settings' },
// ];

// export default function Sidebar({ activeRoute }: SidebarProps) {
//   return (
//     <div className="w-64 bg-slate-900 text-white flex flex-col py-2 rounded-3xl m-12 px-2">
//       <img className="mb-8 w-40 h-16 mx-auto" src={EducoLogo} alt="EDUCO Logo" />
//       <nav className="flex flex-col gap-4 px-4">
//         {navItems.map(({ label, icon, route, badge }) => {
//           const isActive = activeRoute === route;
//           return (
//             <div
//               key={label}
//               className={`flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer transition-all ${
//                 isActive
//                   ? 'bg-yellow-400 text-black font-semibold'
//                   : 'hover:bg-white/10 text-white'
//               }`}
//             >
//               <span className="text-lg">{icon}</span>
//               <span className="flex-1">{label}</span>
//               {badge && (
//                 <span className="text-xs bg-red-500 rounded-full px-2 py-0.5 ml-auto">
//                   {badge}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </nav>
//     </div>
//   );
// }


// src/components/Sidebar.tsx
// src/components/Sidebar.tsx
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

  return (
    <div className="w-60 bg-slate-900 text-white flex flex-col py-2 rounded-3xl ml-12 mt-12 mb-12">
      <img className="mb-10 w-40 h-16 " src={EducoLogo} alt="EDUCO Logo" />
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
  );
}


