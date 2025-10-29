import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";
import MovieCard from "../Components/MovieCard";
import useFetchMovies from "../Hooks/useFetchMovies";
import useFavorites from "../Hooks/useFavourite";
import heroImage from "../assets/image.png"; // ✅ Make sure this exists

function Home() {
  const { movies, loading } = useFetchMovies();
  const { Favorites, toggleFavorite, isFavorite } = useFavorites();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || movie.genres.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* ✅ Hero Section with Background Image */}
      <section
        className="relative text-center flex flex-col justify-center items-center min-h-[90vh] overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "80px", // ✅ Push content below navbar
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-6 py-20 bg-white/0">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            style={{ color: "#c94e1e" }}
          >
            DISCOVER AMAZING SHOWS
          </h1>
          <p className="text-lg text-[#a63f16] mb-10 drop-shadow-sm">
            Explore thousands of TV shows, search your favorites, and build your
            watchlist
          </p>

          <div className="flex flex-col gap-6 items-center">
            <SearchBar value={search} onChange={setSearch} />
            <CategoryFilter
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* ✅ Movies Section — Separate White Background */}
      <section className="bg-white py-16 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* ✅ Show “Results for” text only when user types something */}
          {search.trim() && (
            <h2 className="text-2xl font-semibold mb-6 text-[#a63f16] text-left">
              Results for: <span className="text-[#c94e1e]">"{search}"</span>
            </h2>
          )}

          {loading ? (
            <p className="text-center text-gray-600">Loading movies...</p>
          ) : filteredMovies.length === 0 ? (
            <p className="text-center text-gray-600">No movies found.</p>
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
    </>
  );
}

export default Home;
