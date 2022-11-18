import { getMovieCast, startImageUrl } from 'utils/api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'utils/Box.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!cast) return null;

  return (
    <>
      {cast.length > 0 ? (
        <Box as="ul">
          {cast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? startImageUrl + profile_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
                alt={name}
                width="250"
                loading="lazy"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </Box>
      ) : (
        <p>No cast : (</p>
      )}
    </>
  );
};

export default Cast;
