import PostForm from "./components/Forms/PostForm/PostForm.jsx";
import PostList from "./components/Lists/PostList/PostList.jsx";

export default function App() {
    return (
        <div className="container mx-auto p-3">
            <h1 className="text-2xl text-center">Create Post</h1>
            <PostForm />
            <div className="divider w-full border-t my-4"/>
            <PostList />
        </div>
    )
}