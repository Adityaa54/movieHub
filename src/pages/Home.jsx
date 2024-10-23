import React, { useEffect, useState } from "react";
import CardMovie from "../componets/CardMovie";

function Home() {
    const [Allmovies, setAllmovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
          );
  
          if (!response.ok) {
            throw new Error("Failed to fetch movies");
          }
  
          const data = await response.json();
          console.log("Fetched Movies:", data.results); // Log the fetched data
          setAllmovies(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
  
      fetchMovies();
    }, []);
  
    
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10  bg-black">
       {
        Allmovies.map((movie)=>(
            <CardMovie key={movie.id} movie={movie}/>
        ))
       }
      </div>
    </>
  );
}

export default Home;
