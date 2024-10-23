import React from "react";
import { Link } from "react-router-dom";

function CardMovie({ movie }) {
  console.log("helooo world", movie);
  return (
    <Link to={`/movie/${movie.id}`}>
      <div class="text-center font-semibold text-white">
        <div class="aspect-[2/3] bg-gray-500 rounded-lg">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Constructing the image URL
              alt={movie.title} // Alt text for accessibility
              className="rounded-lg h-full w-full object-cover" // Ensures the image fits the container
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
