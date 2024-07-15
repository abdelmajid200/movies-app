import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ id, title, posterURL }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={posterURL} alt={title} className="movie-poster" />
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
