import InputField from "../../InputField/InputField.jsx";
import Button from "../../Button/Button.jsx";
import PropTypes from "prop-types";

export const PostForm = ({onSubmit, title, onChangeTitle}) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col w-3/6 text-lg mt-6 justify-start items-start">
            <InputField value={title} onChange={onChangeTitle} label="Title"/>
            <Button type="submit" title="Create"/>
        </form>
    )
}

PostForm.propTypes = {
    title: PropTypes.string.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default PostForm;