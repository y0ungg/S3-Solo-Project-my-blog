import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommentList = ({ comments, newComment }) => {
  return (
    <Wrapper>
      {comments.map(v => {return <div key={v.id}>{v.content}</div>})}
      {newComment
      ? newComment.map(el => {return (<div key={el.id}>{el.content}</div>)})
      : null}
    </Wrapper>
  );
};

export default CommentList;
