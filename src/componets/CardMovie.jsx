import React from "react";
import { Link } from "react-router-dom";

function CardMovie({ movie }) {
 
  return (
    <Link to={`/movie/${movie.id}`}>
      <div class="text-center font-semibold text-white">
        <div class="aspect-[2/3] bg-gray-500 rounded-lg">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              className="rounded-lg h-full w-full object-cover" 
            />
          ) : (
            <div className="h-full bg-gray-600 rounded-lg flex items-center justify-center">
              <p>No Image Available</p>
            </div>
          )}
        </div>
        <p> {movie.title}</p>
        <p> Rating: {movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
}

export default CardMovie;
