import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './compo/MovieList';
import MovieDetails from './compo/MovieDetails';
import AddMovie from './compo/AddMovie';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
