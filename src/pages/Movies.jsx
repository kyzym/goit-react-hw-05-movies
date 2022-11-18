import { Box } from 'utils/Box.styled';

import Searchbox from 'components/SearchBar/Searchbox';
import MoviesSearchResult from './MoviesSearchResult';

import { useState } from 'react';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  return (
    <Box>
      <Searchbox setSearchMovies={setSearchMovies} />

      {searchMovies && <MoviesSearchResult movies={searchMovies} />}
    </Box>
  );
};

export default Movies;
