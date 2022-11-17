import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'utils/api/api';
import { Box } from 'utils/Box.styled';

// import { Box } from 'utils/Box.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="1fr"
      gridGap="16px"
      pb="24px"
    >
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Box>
  );
};

export default Home;
