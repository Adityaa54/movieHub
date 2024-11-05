import React, { useState, useEffect } from "react";
import CardMovie from "../componets/CardMovie";
function Upcoming() {
  const [Upcoming, setUpcoming] = useState([]);
  const [pageNum, setpageNum] = useState(1);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        console.log("Fetched Movies:", data.results); // Log the fetched data
        setUpcoming(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
  <div className="min-h-screen bg-black">
    
    {Upcoming.length > 0 ? (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
          {Upcoming.slice(pageNum * 10 - 10, pageNum * 10).map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Pagination */}
        <div>
          <div className="flex justify-center items-center gap-3 pb-3">
           
            {pageNum > 1 && (
              <span
                onClick={() => {
                  setpageNum(pageNum - 1);
                }}
                className={`bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}
              >
                &lt;
              </span>
            )}

            
            {[...Array(Math.ceil(Upcoming.length / 10))].map((_, i) => (
              <span
                key={i}
                onClick={() => {
                  setpageNum(i + 1);
                }}
                className={`bg-slate-600 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                  pageNum === i + 1 ? "bg-blue-300" : "bg-slate-700"
                }`}
              >
                {i + 1}
              </span>
            ))}

            
            {pageNum < Math.ceil(Upcoming.length / 10) && (
              <span
                onClick={() => {
                  setpageNum(pageNum + 1);
                }}
                className={`bg-slate-700 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}
              >
                &gt;
              </span>
            )}
          </div>
        </div>
      </>
    ) : (
      
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>No upcoming movies available</p>
      </div>
    )}
  </div>
</>

  );
}

export default Upcoming;
