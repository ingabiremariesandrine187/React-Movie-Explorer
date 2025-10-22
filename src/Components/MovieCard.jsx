import React from 'react'
import {Heart} from "lucide-react"
import {Link} from "react-router-dom"
function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden transition hover:scale-105">
      <img
        src={movie.image?.medium || movie.image?.original || "https://via.placeholder.com/210x295"}
        alt={movie.name}
        className="w-full h-64 object-cover"
      />
       <div className="p-4">
        <h3 className="text-lg font-bold text-[#c94e1e]">{movie.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{movie.genres.join(", ")}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/movie/${movie.id}`}
            className="bg-[#c94e1e] text-white px-3 py-1 rounded-md text-sm hover:bg-[#a63f16]"
          >
            Details
          </Link>
          <button onClick={() => onToggleFavorite(movie)}>
            <Heart
              className={`w-5 h-5 transition ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
