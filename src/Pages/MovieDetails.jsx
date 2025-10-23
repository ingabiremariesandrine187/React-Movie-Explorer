import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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

  // Prevent rendering before data is available
  if (!movie) return <p className="text-center mt-10">Loading movie details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={movie.image?.medium || movie.image?.original || "https://via.placeholder.com/300x400"}
        alt={movie.name}
        className="w-full max-h-[500px] object-cover rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-4 text-[#c94e1e]">{movie.name}</h1>
      <p className="text-gray-600 my-3">
        {movie.genres?.join(", ") || "No genres available"}
      </p>
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: movie.summary }}
      />
    </div>
  );
}
