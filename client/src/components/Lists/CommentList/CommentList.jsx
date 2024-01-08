import PropTypes from "prop-types";

const CommentList = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => (
                <li className="p-2 my-2 rounded bg-slate-50" key={comment.id}>{comment.content}</li>
            ))}
        </ul>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentList;