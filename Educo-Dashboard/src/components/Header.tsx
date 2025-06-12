// src/components/Header.tsx
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex items-center justify-between mt-10">
      <div className="text-3xl font-bold">
        Welcome back <span className="inline-block animate-wiggle">Taylor 👋</span>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search courses"
            className="w-68 pl-10 pr-4 py-3 rounded-full bg-white text-dark shadow focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark" />
        </div>
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-highlight"
        />
      </div>
    </header>
  );
}
