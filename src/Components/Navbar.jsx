// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Film, Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/favorites", label: "Favorites", icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <nav className="w-full bg-[#fff7f3] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 flex justify-between items-center py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <Film className="text-[#c94e1e] w-7 h-7" />
          <h1 className="text-2xl font-extrabold text-[#c94e1e] tracking-tight">
            MovieExplorer
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-[17px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#c94e1e] text-white shadow-md"
                    : "text-[#7b3f1d] hover:text-[#c94e1e] hover:bg-[#fce5dd]"
                }`
              }
            >
              {icon && icon}
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#c94e1e] hover:text-[#a63f16] transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fff7f3] border-t border-[#f3d2c9] shadow-inner">
          {navLinks.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-8 py-4 text-[16px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#c94e1e] text-white"
                    : "text-[#7b3f1d] hover:text-[#c94e1e] hover:bg-[#fce5dd]"
                }`
              }
            >
              {icon && icon}
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
