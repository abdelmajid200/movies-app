import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import './AddMovie.css';

const AddMovie = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      id: movies.length + 1,
      title,
      description,
      posterURL,
      rating,
    };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="add-movie-container">
      <h1>Add a New Movie</h1>
      <form onSubmit={handleAddMovie} className="add-movie-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
     
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterURL={movie.posterURL}
          />
        ))}
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default AddMovie;
