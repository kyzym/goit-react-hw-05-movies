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
  console.log(cast.length);
  // return <div>sdsdf</div>;
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
                    : 'https://dummyimage.com/200x300/f6f6f6/000&text=No+photo :('
                }
                alt={name}
              />
            </li>
          </Box>
        ))
      ) : (
        <p>No cast</p>
      )}
    </>
  );
};
