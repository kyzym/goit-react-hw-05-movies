import * as SC from './Searchbox.styled';
import { FcSearch } from 'react-icons/fc';

const Searchbox = ({ query, handleSubmit, handleQueryChange }) => {
  return (
    <SC.SearchForm onSubmit={handleSubmit}>
      <SC.SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        value={query}
        onChange={handleQueryChange}
      />
      <SC.SearchFormBtn type="submit">
        <FcSearch style={{ width: 30, height: 30 }} />
      </SC.SearchFormBtn>
    </SC.SearchForm>
  );
};

export default Searchbox;
