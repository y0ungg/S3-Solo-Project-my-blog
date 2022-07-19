import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommentList = ({ comments, newComment }) => {

  return (
    <Wrapper>
      <CommentListItem comments={comments}/>
      {[...newComment].map((el, idx) => {return (<p key={idx}>{el}</p>)})}
    </Wrapper>
  );
};

export default CommentList;
