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
