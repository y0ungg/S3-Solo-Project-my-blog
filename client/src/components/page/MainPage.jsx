import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import PostList from "../list/PostList";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DivBtn = styled.div`
  text-align: center;
  background-color: white;
  box-shadow: 1px 1px 3px 1px #c4c4c4;
  border-radius: 10px;
  width: 250px;
  height: 3rem;
  padding: 0;
  margin: 40px 0 60px 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;


const MainPage = () => {
  const state = useSelector(state => state.postReducer)
  const { post } = state;
  const navigate = useNavigate();
  
  const onClickItem = (item) => {
    const idx = post.findIndex((el) => el.title === item.title);
    navigate(`/post/${post[idx].id}`)
  }

  return (
    <Main>
      <DivBtn role="button"  onClick={() => navigate(`/write`)}>
        <FontAwesomeIcon icon={faPen} />
      </DivBtn>
      <PostList post={post} onClickItem={onClickItem}></PostList>
    </Main>
  );
};

export default MainPage;