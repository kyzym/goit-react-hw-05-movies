import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'utils/api/api';

import { toast } from 'react-hot-toast';

export const useGetSearchMovies = ({ setSearchMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value.trim();

    setSearchParams({ query });

    if (query === '') {
      return toast('Type something!', {
        icon: '😕',
      });
    }

    form.reset();
  };

  useEffect(() => {
    if (!query) return;

    getSearchMovies(query).then(setSearchMovies);
  }, [query, setSearchMovies]);

  return handleSubmit;
};
