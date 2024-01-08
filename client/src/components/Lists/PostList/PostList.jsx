import axios from "axios";
import {useEffect, useState} from "react";

import CommentForm from "@/components/Forms/CommentForm/CommentForm.jsx";
import CommentList from "@/components/Lists/CommentList/CommentList.jsx";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');

        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts)

    return (<div className="grid grid-cols-3 gap-4">
        {renderedPosts.map(post => (<div className="border p-3 rounded shadow-lg" key={post.id}>
            <h3 className="text-xl font-bold mb-6">{post.title}</h3>
            <CommentForm postId={post.id}/>
            <div className="divider w-full border-t my-4"/>
            <CommentList comments={post.comments}/>
        </div>))}
    </div>)
}

export default PostList;