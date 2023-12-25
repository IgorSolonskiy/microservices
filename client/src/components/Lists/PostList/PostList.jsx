import {useEffect, useState} from "react";
import axios from "axios";
import CommentForm from "../../Forms/CommentForm/CommentForm.jsx";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts)

    return (
        <div className="grid grid-cols-3 gap-4">
            {renderedPosts.map(post=>(
                <div className="border p-3 rounded shadow-lg" key={post.id}>
                    <h3 className="text-xl font-bold mb-6">{post.title}</h3>
                    <CommentForm postId={post.id} />
                </div>
            ))}
        </div>
    )
}

export default PostList;