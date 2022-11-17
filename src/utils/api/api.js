import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'fc60a6bdb24ebf37b614cab96927d720';

export const getTrending = async () => {
  const { data } = await axios('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};
