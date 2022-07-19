//글, 댓글, 댓글작성기능
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editPost, deletePost, addComment } from '../../actions/index'

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid red;
  padding-top: 20px;
`;

const TextInput = styled.input`
  width: 50%;
  height: 3rem;
  margin: 10px;
`

const PostViewPage = () => {
  const state = useSelector(state => state.postReducer);
  const { post, comments } = state;
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [value, setValue] = useState('');
  
  const selectedPost = post.find((item) => item.id === parseInt(postId));
  const selectedComments = comments.find((el) => el.postId === postId)

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // if(newComment.includes(value)) {
    //   alert("중복 댓글입니다.");
    //   setValue('');
    // }
    // else{
    //   setNewComment([...newComment, value]);
    // }
    dispatch(addComment(postId, value))
  }


    return (
      <div>
        <div>{selectedPost.title}</div>
        <div>{selectedPost.content}</div>
        <CommentList comments={selectedComments} />
        <Form onSubmit={onSubmitHandler}>
          <TextInput onChange={onChangeHandler} value={value} type="text"></TextInput>
          <input onChange={onChangeHandler} type="submit" value="등록"></input>
        </Form>
      </div>
    );
  };
  
  export default PostViewPage;