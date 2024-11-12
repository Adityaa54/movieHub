import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardMovie from "../componets/CardMovie";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}&page=${pageNum}`
          );
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
    };

    fetchMovies();
  }, [query, pageNum]); 

  return (
    <>
      {movies && movies.length > 0 ? (
        <div className="min-h-screen bg-black">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
            {movies.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </div>

          
          <div className="flex justify-center items-center gap-3 pb-8">
            {pageNum > 1 && (
              <span
                onClick={() => setPageNum(pageNum - 1)}
                className="bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
              >
                &lt;
              </span>
            )}

            
            <span className="text-white">{pageNum}</span>

            
            {movies.length === 20 && (
              <span
                onClick={() => setPageNum(pageNum + 1)}
                className="bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
              >
                &gt;
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <p>No movies available</p>
        </div>
      )}
    </>
  );
}

export default SearchPage;
