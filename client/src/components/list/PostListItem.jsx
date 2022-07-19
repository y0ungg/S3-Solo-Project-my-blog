import styled from "styled-components";

const TitleText = styled.div`
    padding: 10px;
    margin: 10px;
    border: 1px solid green;
    width: 100%;
`;

const PostListItem = (props) => {
    const { post, onClick } = props;

    return (
        <TitleText onClick={onClick}>{post.title}</TitleText>
    )
}

export default PostListItem;