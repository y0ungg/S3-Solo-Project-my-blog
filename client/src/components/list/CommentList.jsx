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
      {/* {comments.map((v,i) => {<div key={}>{v}</div>})} */}
      {/* {[...newComment].map((el, idx) => {return (<p key={idx}>{el}</p>)})} */}
    </Wrapper>
  );
};

export default CommentList;
