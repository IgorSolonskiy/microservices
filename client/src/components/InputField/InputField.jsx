import PropTypes from "prop-types";

const InputField = ({label,value, onChange}) => (
    <>
        <label htmlFor="title" className="mb-1 cursor-pointer">{label}</label>
        <input id="title" type="text" onChange={onChange} value={value}
               className="border-current border outline-sky-500/100 px-3 border-sky-500/50 rounded hover:border-sky-500/100 max-w-xs"/>
    </>
)


InputField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value:PropTypes.string.isRequired
}

export default InputField;