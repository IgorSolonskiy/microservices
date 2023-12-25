import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = useCallback(async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data)
    },[postId])

    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <ul className="">
            {comments.map(comment => (
                <li className="p-2 my-2 rounded bg-slate-50" key={comment.id}>{comment.content}</li>
            ))}
        </ul>
    )
}

CommentList.propTypes = {
    postId: PropTypes.string.isRequired
}

export default CommentList;