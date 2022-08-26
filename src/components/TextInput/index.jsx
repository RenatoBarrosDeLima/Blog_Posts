import P from 'prop-types';

import './styles.css';

const TextInput = ({ handleInputChange, searchValue }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleInputChange}
      value={searchValue}
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  handleInputChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};

export default TextInput;
