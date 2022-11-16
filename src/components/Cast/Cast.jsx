import { getMovieCast } from 'utils/api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'utils/Box.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) return null;

  return (
    <>
      {cast.length > 0 ? (
        cast.map(({ name, character, profile_path, id }) => (
          <Box as="ul">
            <li key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
                alt={name}
                width="250"
                loading="lazy"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          </Box>
        ))
      ) : (
        <p>No cast</p>
      )}
    </>
  );
};
