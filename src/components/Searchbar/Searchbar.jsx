import { SearchbarStyled, SearchFormStyled } from './Searchbar.styled';

import { BsApple } from 'react-icons/bs';

import PropTypes from 'prop-types';

const Searchbar = ({ updateQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();
    let valueInput = e.target.elements.query.value;
    valueInput.trim();
    updateQuery(valueInput);
    e.target.elements.query.value = '';
  };

  return (
    <>
      <SearchbarStyled>
        <SearchFormStyled onSubmit={e => handleSubmit(e)}>
          <button type="submit" className="button">
            <BsApple fontSize="30px" />
          </button>

          <input
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchFormStyled>
      </SearchbarStyled>
    </>
  );
};

Searchbar.propTypes = {
  updateQuery: PropTypes.func.isRequired,
};

export default Searchbar;
