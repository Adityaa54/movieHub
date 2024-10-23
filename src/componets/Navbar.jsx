import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-green-50 bg-black px-6 py-2 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 sm:w-16 sm:h-16">
            <img
              src="https://pluspng.com/img-png/movie-png-hd-movie-logo-cliparts-2524910-1118.png"
              alt="Movie Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="hidden text-white font-bold sm:block">
            <span className="text-lg md:text-xl">MovieDB</span>
          </div>
        </div>

        {/* Links and Search Bar */}
        <div className="flex items-center space-x-4">
          {/* Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className='text-white hover:text-pink-600'>Popular</Link>
            <Link to="/toprated" className='text-white hover:text-pink-600'>Top Rated</Link>
            <Link to="/upcoming" className='text-white hover:text-pink-600'>Up Coming</Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Movie Name"
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded w-32 md:w-64 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700" aria-label="Search Movies">
              Search
            </button>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Navbar;
