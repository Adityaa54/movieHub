import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardMovie from "../componets/CardMovie";
function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setpageNum] = useState(1);
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
  {movies && movies.length > 0 ? (
    <div className="min-h-screen bg-black">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
        {movies.slice(pageNum * 10 - 10, pageNum * 10).map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <div>
        <div className="flex justify-center items-center gap-3 pb-8">
          
          {pageNum > 1 && (
            <span
              onClick={() => setpageNum(pageNum - 1)}
              className="bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
            >
              &lt;
            </span>
          )}

          {[...Array(Math.ceil(movies.length / 10))].map((_, i) => (
            <span
              key={i} 
              onClick={() => setpageNum(i + 1)}
              className={`bg-slate-600 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                pageNum === i + 1 ? "bg-blue-300" : "bg-slate-700"
              }`}
            >
              {i + 1}
            </span>
          ))}

          {/* Next Page Button */}
          {pageNum < Math.ceil(movies.length / 10) && (
            <span
              onClick={() => setpageNum(pageNum + 1)}
              className="bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
            >
              &gt;
            </span>
          )}
        </div>
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
