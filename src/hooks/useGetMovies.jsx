import { useEffect, useState } from 'react';
import { getTrending } from 'utils/api/api';

export const useGetMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return movies;
};
