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
  //클릭한 글
  const selectedPost = post.find((item) => item.id === parseInt(postId));
  //클릭한 글의 댓글 (배열)
  const selectedComments = comments.find((el) => el.postId === parseInt(postId)).content;
  const [value, setValue] = useState('');
  const [newComment, setNewComment] = useState([]);
  const [id, setId] = useState(Math.max(...(post.map(v => {return v.id}))))
  

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setId(id => id + 1)
    setNewComment([...newComment, {id, content: value}])
    dispatch(addComment(postId, newComment))
  };

    return (
      <div>
        <div>{selectedPost.title}</div>
        <div>{selectedPost.content}</div>
        <CommentList comments={selectedComments} newComment={newComment} />
        <Form onSubmit={onSubmitHandler}>
          <TextInput onChange={(e) => setValue(e.target.value)} value={value} type="text"></TextInput>
          <button>등록</button>
        </Form>
      </div>
    );
  };
  
  export default PostViewPage;