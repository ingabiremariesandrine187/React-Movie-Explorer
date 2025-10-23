import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 function MovieDetails() {
  const { id } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store movie data

  // Fetch movie details when component mounts or ID changes
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    fetchMovie();
  }, [id]);

  // Show loading while data is being fetched
  if (!movie)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg">
        Loading movie details...
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 mt-10">
      {/* Movie Poster */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.image?.medium || movie.image?.original || "https://via.placeholder.com/300x400"}
          alt={movie.name}
          className="w-full md:w-1/3 object-cover rounded-xl shadow-lg"
        />

        {/* Movie Info */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#c94e1e] mb-3">
            {movie.name}
          </h1>

          {/* Genres */}
          <p className="text-gray-600 mb-4 text-lg">
            {movie.genres?.length ? movie.genres.join(", ") : "No genres available"}
          </p>

          {/* Summary */}
          <div
            className="text-gray-700 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: movie.summary }}
          />
        </div>
      </div>
    </div>
  );
}
export default MovieDetails