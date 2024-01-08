import PropTypes from "prop-types";
import {getCommentContentByStatus} from "@/helpers/comment/index.js";

const CommentList = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => (
                <li className="p-2 my-2 rounded bg-slate-50" key={comment.id}>{getCommentContentByStatus(comment)}</li>
            ))}
        </ul>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentList;