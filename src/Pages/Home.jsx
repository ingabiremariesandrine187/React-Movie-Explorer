// src/components/Hero.jsx
import { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All", "Action", "Adventure", "Anime", "Comedy", "Crime", "Drama",
  "Espionage", "Family", "Fantasy", "History", "Horror", "Legal",
  "Medical", "Music", "Mystery", "Romance", "Science-Fiction",
  "Sports", "Supernatural", "Thriller", "War", "Western"
];

export default function Hero() {
  const [selected, setSelected] = useState("All");
  return (
    <section className="text-center py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#a63f16] mb-3">
        DISCOVER AMAZING SHOWS
      </h1>
      <p className="text-lg text-[#7b3f1d]/70 mb-10">
        Explore thousands of TV shows, search your favorites, and build your watchlist
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 flex items-center bg-white rounded-full shadow px-4 py-2">
        <Search className="text-[#a63f16]" />
        <input
          type="text"
          placeholder="Search for movies..."
          className="flex-1 px-3 py-2 outline-none bg-transparent text-[#7b3f1d]"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full border transition ${
              selected === cat
                ? "bg-[#c94e1e] text-white border-[#c94e1e]"
                : "bg-white text-[#7b3f1d] border-[#d1b6aa] hover:bg-[#fae7dc]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
