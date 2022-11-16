import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'utils/api/api';

// import { Box } from 'utils/Box.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => await getTrending().then(setMovies);
    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
