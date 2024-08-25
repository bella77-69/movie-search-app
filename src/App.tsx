import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { Movie } from './types/Movie';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
          },
        });

        setMovies(response.data.results);
      } catch (err) {
        setError('Failed to load popular movies.');
      }
    };

    fetchPopularMovies();
  }, []);

  const fetchMovies = async (query: string) => {
    try {
      setError(null);
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          query: query,
        },
      });

      if (response.data.results.length > 0) {
        setMovies(response.data.results);
      } else {
        setError('No movies found.');
        setMovies([]);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={fetchMovies} />
      {error && <p className="error">{error}</p>}
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;