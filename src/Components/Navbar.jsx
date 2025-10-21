// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Film, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#fff7f3] shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Film className="text-[#c94e1e] w-6 h-6" />
        <h1 className="text-xl font-bold text-[#c94e1e]">MovieExplorer</h1>
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className="flex items-center gap-1 bg-[#c94e1e] text-white px-3 py-1 rounded-md hover:bg-[#a63f16] transition"
        >
          <span></span> Home
        </Link>
        <Link
          to="/favorites"
          className="flex items-center gap-1 text-[#7b3f1d] hover:text-[#c94e1e] transition"
        >
          <Heart className="w-5 h-5" /> Favorites
        </Link>
      </div>
    </nav>
  );
}
