import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    width: 50%;
    font-size: 15pt;
`

const PostList = (props) => {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((item) => {
                return (
                    <PostListItem
                        key={item.id}
                        post={item}
                        onClick={() => onClickItem(item)}
                    />
                )
            })}
        </Wrapper>
        )
}

export default PostList;