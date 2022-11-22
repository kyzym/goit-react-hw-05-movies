import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

import { useGetMovies } from 'hooks/useGetMovies';
import { FcFilmReel } from 'react-icons/fc';
import { Box } from 'utils/Box.styled';
import * as SC from '../Home/Home.styled';
import { Gallery } from './Home.styled';

const Home = () => {
  const { movies, loading, success } = useGetMovies();

  return (
    <Box p="20px">
      <SC.Title>
        Trending today
        <FcFilmReel />
      </SC.Title>
      {loading && <Loader />}
      <Gallery>{success && <MoviesList movies={movies} />}</Gallery>
    </Box>
  );
};
<Loader />;

export default Home;
