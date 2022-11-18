import { Box } from 'utils/Box.styled';
// import { useLocation } from 'react-router-dom';

const MoviesSearchResult = ({ movies }) => {
  return (
    <Box as="ul">
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <li key={id}>
          <p>{title}</p>
        </li>
      ))}
    </Box>
  );
};

export default MoviesSearchResult;
