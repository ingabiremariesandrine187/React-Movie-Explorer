import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";
import MovieCard from "../Components/MovieCard";
import useFetchMovies from "../Hooks/useFetchMovies";
import useFavorites from "../Hooks/useFavourite";

function Home() {
  const { movies, loading } = useFetchMovies();
  const { Favorites, toggleFavorite, isFavorite } = useFavorites();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || movie.genres.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative text-center flex flex-col justify-center items-center min-h-[90vh] overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581905764498-4b7c1f95f6d0?auto=format&fit=crop&w=1470&q=80')",
          zIndex: -2,
        }}
      ></div> 

      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-orange bg-opacity-40"
        style={{ zIndex: -1 }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg" style={{ color: "#c94e1e" }}>
  DISCOVER AMAZING SHOWS
</h1>
        <p className="text-lg text-[#a63f16] mb-10 drop-shadow-sm">
          Explore thousands of TV shows, search your favorites, and build your watchlist
        </p>

        <div className="flex flex-col gap-6 items-center">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>
      </div>

      {/* Movies Section */}
      <div className="relative z-10 mt-16 px-6 w-full max-w-7xl">
        {loading ? (
          <p className="text-center text-gray-100">Loading movies...</p>
        ) : filteredMovies.length === 0 ? (
          <p className="text-center text-gray-100">No movies found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={isFavorite(movie.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
