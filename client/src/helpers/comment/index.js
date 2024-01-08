export const getCommentContentByStatus = (comment) => {
    switch (comment.status) {
        case 'pending':
            return 'This comment is awaiting moderation'
        case 'rejected':
            return 'This comment has been rejected'
        default:
            return comment.content
    }
}