import { FcSearch } from 'react-icons/fc';
import * as SC from './Searchbox.styled';

import { useGetSearchMovies } from 'hooks/useGetSearchMovies';

const Searchbox = ({ setSearchMovies }) => {
  const handleSubmit = useGetSearchMovies({ setSearchMovies });

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
