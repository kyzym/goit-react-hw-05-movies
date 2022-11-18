import * as SC from './Searchbox.styled';
import { FcSearch } from 'react-icons/fc';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'utils/api/api';
import { Box } from 'utils/Box.styled';

const Searchbox = ({ setSearchMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value;

    setSearchParams({ query });

    form.reset();
  };

  useEffect(() => {
    if (!query) return;

    getSearchMovies(query).then(setSearchMovies);
  }, [query, setSearchMovies]);

  return (
    <SC.SearchWrapper>
      <SC.SearchForm onSubmit={handleSubmit}>
        <SC.SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <SC.SearchFormBtn type="submit">
          <FcSearch style={{ width: 30, height: 30 }} />
        </SC.SearchFormBtn>
      </SC.SearchForm>
    </SC.SearchWrapper>
  );
};

export default Searchbox;
