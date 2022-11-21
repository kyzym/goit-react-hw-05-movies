import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'utils/api/api';

export const useGetMovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovieDetails)
      .catch(error => console.log(error));
  }, [movieId]);

  return { movieDetails, backLinkHref };
};
