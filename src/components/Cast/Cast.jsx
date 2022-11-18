import { getMovieCast, startImageUrl } from 'utils/api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'utils/Box.styled';
import * as SC from './Cast.styled';

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
    <Box as="div" p="20px">
      {cast.length > 0 ? (
        <Box as="ul" display="flex" flexWrap="wrap" gridGap={20}>
          {cast.map(({ name, character, profile_path, id }) => (
            <SC.CastItem key={id}>
              <SC.Photo
                src={
                  profile_path
                    ? startImageUrl + profile_path
                    : 'https://dummyimage.com/200x300/bab8ba/000&text=No+photo+;('
                }
                alt={name}
                width="200"
                loading="lazy"
              />
              <SC.NameRole>
                <p>{name}</p>
                <p>
                  <b>Character: </b> {character}
                </p>
              </SC.NameRole>
            </SC.CastItem>
          ))}
        </Box>
      ) : (
        <p>No cast : (</p>
      )}
    </Box>
  );
};

export default Cast;
