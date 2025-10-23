// src/components/Hero.jsx
import { useState } from "react";
import { Search } from "lucide-react";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";
import MovieCard from "../Components/MovieCard";
import useFetchMovies from "../Hooks/useFetchMovies"
import useFavorites from "../Hooks/useFavourite"





export default function Home() {
const {movies, loading} = useFetchMovies();
const { Favorites,toggleFavorite, isFavorite} = useFavorites();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
    selectedCategory === "All" || movie.genres.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  })

  return (
    <section className="text-center py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#a63f16] mb-3">
        DISCOVER AMAZING SHOWS
      </h1>
      <p className="text-lg text-[#7b3f1d]/70 mb-10">
        Explore thousands of TV shows, search your favorites, and build your watchlist
      </p>
      <SearchBar value={search} onChange={setSearch} />
       <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

     
      {loading ? (
        <p className="text-center text-gray-500">Loading movies...</p>
      ) : filteredMovies.length === 0 ? (
        <p className="text-center text-gray-500">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={isFavorite(movie.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}


