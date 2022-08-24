import './styles.css';

const Button = ({ text, loadMorePosts, disabled }) => {

    return (
        <button
            className="button"
            onClick={loadMorePosts}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button;