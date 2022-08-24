import './styles.css';

const TextInput = ({ handleChange, searchValue }) => {
    return (
        <input
            className="text-input"
            type="search"
            onChange={handleChange}
            value={searchValue}
            placeholder="Type your search"
        />
    )
};

export default TextInput;