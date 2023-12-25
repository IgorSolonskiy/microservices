import PropTypes from "prop-types";

const Button = ({title, type}) => <button type={type}
    className="px-4 py-2 text-white rounded mt-3 text-sm max-w-xs bg-sky-500/50 hover:shadow-lg hover:bg-sky-500/100">{title}</button>

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit'])
}

export default Button;