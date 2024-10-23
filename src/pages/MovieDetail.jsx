import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [Cast, setCast] = useState([]);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    console.log(movie);
    console.log(Cast);
  }, [movie, Cast]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en`
        );
        const data = await res.json();
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };
    fetchCast();
  }, []);

  if (!movie) return <div>Loading...</div>; // Show loading message while fetching

  return (
    <>
      <div className="bg-black min-h-screen p-4 text-white">
        <div className="bg-gray-900 p-4 rounded-md text-white shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Section with Poster and Movie Details */}
            <div className="md:w-1/2">
              <div className="flex">
                {/* Poster Section */}
                <div className="w-1/3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Movie Details Section */}
                <div className="w-2/3 pl-4 text-base font-mono">
                  <p className="mb-2 text-sm sm:text-2xl md:text-3xl font-bold">
                    {movie.title}
                  </p>

                  <div className="text-xs md:text-sm">
                    <span className="text-base">
                      Rating:{" "}
                      <span className="text-white">{movie.vote_average}</span>
                    </span>
                    <span className="mx-4">|</span>
                    <span>{`${movie.runtime} min`}</span>
                    <br />
                    <span>
                      {movie.genres.map((gen) => gen.name).join(", ")}
                    </span>
                    <div>Release Date: {movie.release_date}</div>
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <div className="font-serif text-lg mt-4">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-sm">{movie.overview}</p>
              </div>
            </div>

            {/* Right Section with Backdrop Image */}
            <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4 flex items-center justify-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.title} Backdrop`}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <p className="p-4 text-2xl font-bold">Cast</p>

        <div className="flex space-x-6 overflow-x-auto">
          {Cast.map((cast) => (
            <div
              key={cast.id}
              className="flex-shrink-0 p-4 rounded-lg w-[250px]"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={`${cast.name}`}
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold">{cast.name}</h3>
              <p className="mt-1 text-sm text-gray-400">
                Character: {cast.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
