import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommentList = ({ comments, newComment }) => {
  console.log(newComment)
  return (
    <Wrapper>
      {comments.map(v => {return <div key={v.id}>{v.content}</div>})}
      {newComment
      ? [...newComment].map((el, idx) => {return (<p key={idx}>{el}</p>)})
      : null}
    </Wrapper>
  );
};

export default CommentList;
