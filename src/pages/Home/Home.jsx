import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'utils/api/api';
import { Box } from 'utils/Box.styled';
import { Gallery } from './Home.styled';
import * as SC from '../Home/Home.styled';
import { FcFilmReel } from 'react-icons/fc';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <Box p="20px">
      <SC.Title>
        Trending today
        <FcFilmReel />
      </SC.Title>
      <Gallery>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </Gallery>{' '}
    </Box>
  );
};
<Loader />;

export default Home;
