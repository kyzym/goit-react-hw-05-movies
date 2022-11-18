import { Box } from 'utils/Box.styled';
import { Link, useLocation } from 'react-router-dom';
import { startImageUrl } from 'utils/api/api';
import * as SC from '../MoviesSearchResult/MoviesSearchResult.styled';

const MoviesSearchResult = ({ movies }) => {
  const location = useLocation();

  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      gridGap={20}
      justifyContent="center"
    >
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <SC.MovieListItem key={id}>
          <SC.MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <SC.Photo
              src={
                poster_path
                  ? startImageUrl + poster_path
                  : 'https://dummyimage.com/200x300/bab8ba/000&text=No+photo+;('
              }
              alt={title}
              width="200px"
            />
            <SC.TitleRating>
              <p>{title}</p>
              <p>{(vote_average * 10).toFixed(2)}%</p>
            </SC.TitleRating>
          </SC.MovieLink>
        </SC.MovieListItem>
      ))}
    </Box>
  );
};

export default MoviesSearchResult;
