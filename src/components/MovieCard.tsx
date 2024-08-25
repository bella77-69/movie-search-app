import React from 'react';
import '../styles/MovieCard.css';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>
        {movie.overview.length > 100
          ? `${movie.overview.substring(0, 100)}...`
          : movie.overview}
      </p>
    </div>
  );
};

export default MovieCard;