import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
const[Search , setSearch] = useState("");

const navigate = useNavigate();
const handleSearch=()=>{
  const trimsearch = Search.trim();
  console.log(Search);
  if (trimsearch) {
    navigate(`/search?query=${Search}`);
  }
}

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-green-50 bg-black px-6 py-2 md:px-12 space-y-2 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 sm:w-16 sm:h-16">
            <img
              src="https://pluspng.com/img-png/movie-png-hd-movie-logo-cliparts-2524910-1118.png"
              alt="Movie Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="text-white font-bold sm:block">
            <span className="text-lg md:text-xl">MovieDB</span>
          </div>
        </div>

        {/* Links and Search Bar */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          {/* Links */}
          <div className="flex justify-center space-x-4">
            <Link to="/" className="text-white hover:text-pink-600">Popular</Link>
            <Link to="/toprated" className="text-white hover:text-pink-600">Top Rated</Link>
            <Link to="/upcoming" className="text-white hover:text-pink-600">Upcoming</Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 w-full justify-center md:w-auto">
            <input
              type="text"
              placeholder="Movie Name"
              value={Search}
              onChange={(e)=> setSearch(e.target.value)}
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded w-full md:w-64 focus:outline-none"
            />
            <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700" aria-label="Search Movies">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
