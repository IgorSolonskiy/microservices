import axios from "axios";
import {useCallback, useState} from "react";

export const PostForm = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle('');
    }, [title])

    const handleChangeTitle = useCallback(e => setTitle(e.target.value), []);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-3/6 text-lg mt-6 justify-start items-start">
            <label
                htmlFor="title"
                className="mb-1 cursor-pointer">
                Create Post
            </label>
            <input
                id="title"
                type="text"
                onChange={handleChangeTitle}
                value={title}
                className="border-current border outline-sky-500/100 px-3 border-sky-500/50 rounded hover:border-sky-500/100 max-w-xs"/>
            <button
                type="submit"
                className="px-4 py-2 text-white rounded mt-3 text-sm max-w-xs bg-sky-500/50 hover:shadow-lg hover:bg-sky-500/100">
                Create
            </button>
        </form>
    )
}

export default PostForm;