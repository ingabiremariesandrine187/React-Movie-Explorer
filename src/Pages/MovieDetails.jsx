import React from 'react'
import { useParams,Link } from 'react-router-dom'
import useFetchMovies from '../Hooks/useFetchMovies';
function MovieDetails() {
  const { id } = useParams();
  const { movies } = useFetchMovies();
  const movie = movie.find(m =>m.id === Number(id));
  if(!movie){
    return <p className="text-center mt-10 text-gray-500">Movie not found</p>
  }
  return (
     <div className="px-6 py-10 max-w-4xl mx-auto">
      <img
        src={movie.image?.original || "https://via.placeholder.com/500x700"}
        alt={movie.name}
        className="w-full rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-[#c94e1e] mb-3">{movie.name}</h1>
      <p className="text-gray-500 mb-2">{movie.genres.join(", ")}</p>
      <div
        className="text-gray-700 mb-5"
        dangerouslySetInnerHTML={{ __html: movie.summary }}
      />
      <Link
        to="/"
        className="bg-[#c94e1e] text-white px-4 py-2 rounded-md hover:bg-[#a63f16]"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default MovieDetails
