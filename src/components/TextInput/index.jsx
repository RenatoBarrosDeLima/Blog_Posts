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
    )
};

export default TextInput;