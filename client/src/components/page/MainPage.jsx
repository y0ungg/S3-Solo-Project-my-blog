import { useNavigate } from "react-router-dom";
import data from "../../Data";
import PostList from "../list/PostList";
import styled from "styled-components";


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Div = styled.div`
  text-align: center;
  border: 1px solid red;
  width: 500px;
  height: 3rem;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
`;


const MainPage = () => {
  const navigate = useNavigate();
  
  const onClickItem = (item) => {
    const idx = data.findIndex((el) => el.title === item.title);
    navigate(`/post/${data[idx].id}`)
  }

  return (
    <Main>
      <Div onClick={() => navigate(`/write`)}>글 작성하기</Div>
      <PostList posts={data} onClickItem={onClickItem}></PostList>
    </Main>
  );
};

export default MainPage;