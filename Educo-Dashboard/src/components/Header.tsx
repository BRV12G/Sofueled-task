import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
      <div className="flex items-center gap-3">
        {/* Hamburger menu placeholder for mobile, add logic if needed */}
        {/* <button className="lg:hidden bg-slate-900 text-white p-2 rounded-full shadow">
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button> */}
        <div className="text-2xl sm:text-3xl font-bold">
          Welcome back{" "}
          <span className="inline-block animate-wiggle">Taylor 👋</span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <input
            type="text"
            placeholder="Search courses"
            className="w-full sm:w-68 pl-10 pr-4 py-3 rounded-full bg-white text-dark shadow focus:outline-none"
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
