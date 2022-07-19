//글, 댓글, 댓글작성기능
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import data from "../../Data";
import { useState } from "react";

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


const PostViewPage = (props) => {
  const [value, setValue] = useState('');
  const [newComment, setNewComment] = useState('');
  const { postId } = useParams();
  
  const post = data.find((item) => item.id === parseInt(postId));

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(newComment.includes(value)) {
      alert("중복 댓글입니다.");
      setValue('');
    }
    else{
      setNewComment([...newComment, value]);
    }
  }


    return (
      <div>
        <div>{post.title}</div>
        <div>{post.content}</div>
        <CommentList comments={post.comments} newComment={newComment} />
        <Form onSubmit={onSubmitHandler}>
          <TextInput onChange={onChangeHandler} value={value} type="text"></TextInput>
          <input onChange={onChangeHandler} type="submit" value="등록"></input>
        </Form>
      </div>
    );
  };
  
  export default PostViewPage;