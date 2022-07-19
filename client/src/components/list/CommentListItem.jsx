import styled from "styled-components";

const CommentListItem = ({comments}) => {
    return (
        comments.map((comment) => {
            return (<p key={comment.id}>{comment.content}</p>)
        })
    )
}

export default CommentListItem;