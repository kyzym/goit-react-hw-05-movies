import { Box } from 'utils/Box.styled';

import Searchbox from 'components/SearchBar/Searchbox';
import MoviesSearchResult from '../../components/MoviesSearchResult/MoviesSearchResult';

import { useState } from 'react';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  return (
    <Box p="20px" m="0 auto">
      <Searchbox setSearchMovies={setSearchMovies} />

      {searchMovies && <MoviesSearchResult movies={searchMovies} />}
    </Box>
  );
};

export default Movies;
