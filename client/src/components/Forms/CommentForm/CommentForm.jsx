import axios from "axios";
import PropTypes from "prop-types";
import {useCallback, useId, useState} from "react";

export const CommentForm = ({postId}) => {
    const [content, setContent] = useState('');
    const id = useId();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        })

        setContent('');
    }, [content])

    const handleChangeTitle = useCallback(e => setContent(e.target.value), []);

    return (<form onSubmit={handleSubmit} className="flex flex-col mt-6 justify-start items-start">
            <label
                htmlFor={id}
                className="mb-1 cursor-pointer">
                Create Comment
            </label>
            <input
                id={id}
                type="text"
                onChange={handleChangeTitle}
                value={content}
                className="border-current border outline-sky-500/100 px-3 border-sky-500/50 rounded hover:border-sky-500/100"/>
            <button
                type="submit"
                className="px-4 py-2 text-white rounded mt-3 text-sm max-w-xs bg-sky-500/50 hover:shadow-lg hover:bg-sky-500/100">
                Create
            </button>
        </form>)
}

CommentForm.propTypes = {
    postId: PropTypes.string.isRequired
}

export default CommentForm;