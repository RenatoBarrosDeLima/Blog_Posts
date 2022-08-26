import P from 'prop-types';

import './styles.css';

const Button = ({ text, loadMorePosts, disabled = false }) => {
  return (
    <button className="button" onClick={loadMorePosts} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  loadMorePosts: P.func.isRequired,
  disabled: P.bool,
};

export default Button;
