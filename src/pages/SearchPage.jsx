import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardMovie from "../componets/CardMovie";
function SearchPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
        });
    }
  }, [query]);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10 min-h-screen bg-black">
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
