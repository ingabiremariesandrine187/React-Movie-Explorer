import React from 'react'
import useFavorites from '../Hooks/useFavourite'
import MovieCard from '../Components/MovieCard'
function Favourites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
       <h1 className="text-3xl font-bold text-[#c94e1e] mb-6 text-center">
        Favorite Movies
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You have 0 favorite movies</p>
      ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map(movie => (
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
  )
}

export default Favourites
