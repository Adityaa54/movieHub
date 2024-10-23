import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import Navbar from './componets/Navbar';
import MovieDetail from './pages/MovieDetail';
import SearchPage from './pages/SearchPage';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default App;
