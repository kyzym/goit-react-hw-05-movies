import { Box } from 'utils/Box.styled';
import { Link, useLocation } from 'react-router-dom';
import { startImageUrl } from 'utils/api/api';

const MoviesSearchResult = ({ movies }) => {
  const location = useLocation();

  return (
    <Box as="ul">
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
            <img
              src={
                poster_path
                  ? startImageUrl + poster_path
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt={title}
              width="300px"
            />
            <p>{(vote_average * 10).toFixed(2)}%</p>
          </Link>
        </li>
      ))}
    </Box>
  );
};

export default MoviesSearchResult;
