import React, { useEffect, useState } from "react";
import CardMovie from "../componets/CardMovie";

function Home() {
  const [Allmovies, setAllmovies] = useState([]);
  const [pageNum, setpageNum] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${pageNum}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setAllmovies(data.results); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [pageNum]);

  return (
    <>
      <div className="min-h-screen bg-black">
        {Allmovies.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
              {Allmovies.map((movie) => (
                <CardMovie key={movie.id} movie={movie} />
              ))}
            </div>

            {/* Pagination gdfsgdgdsg */}
            <div>
              <div className="flex justify-center items-center gap-3 pb-8">
                {pageNum > 1 && (
                  <span
                    onClick={() => setpageNum(pageNum - 1)}
                    className="bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
                  >
                    
                  </span>
                )}

                <span className="text-white">{pageNum}</span>

                {pageNum < 400 && ( 
                  <span
                    onClick={() => setpageNum(pageNum + 1)}
                    className="bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
                  >
                    
                  </span>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-screen text-white">
            <p>No movies available</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
