import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      const movieData = await fetchMovies(searchQuery);
      setMovies(movieData);
    };
    fetchFilteredMovies();

    // if (searchQuery.length > 0) {
    //   fetchFilteredMovies();
    // } else {
    //   const getMovies = async () => {
    //     const movieData = await fetchMovies();
    //     setMovies(movieData);
    //   };
    //   getMovies();
    // }
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="movie-list-container">
      <h1>Movies App</h1>
      <div className="search-add-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for movies..."
          className="search-input"
        />
        <Link to="/addmovie" className="add-movie-button">Add Movie</Link>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  ); 
};

export default MovieList;
