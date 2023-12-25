import Button from "./components/Button/Button.jsx";
import InputField from "./components/InputField/InputField.jsx";
import axios from "axios";
import {useCallback, useState} from "react";
import PostForm from "./components/Forms/PostForm/PostForm.jsx";
import PostList from "./components/Lists/PostList/PostList.jsx";

export default function App() {
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
        <div className="container mx-auto p-3">
            <h1 className="text-2xl text-center">Create Post</h1>
            <PostForm onSubmit={handleSubmit} onChangeTitle={handleChangeTitle} title={title}/>
            <div className="divider w-full border-t my-4"/>
            <PostList />
        </div>
    )
}