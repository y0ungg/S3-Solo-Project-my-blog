import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import MainPage from "./components/page/MainPage";
import PostViewPage from "./components/page/PostViewPage";
import PostWritePage from "./components/page/PostWritePage";

// const Nav = styled.nav`
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   flex-wrap: wrap;
// `

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Title = styled.h1`
  font-family: sans-serif;
  text-align: center;
  border: 1px solid green;
  padding: 40px 0px;
  font-size: 4rem;
  font-weight: 100;
  font-style: italic;
`

const Footer = styled.footer`
  text-align: right;
  margin-top: 50px;
  padding: 10px 10px 30px 0;
  background: #c1edf8;
`

function App() {
  return (
    <div className="App">
      <header>
        <StyledLink to="/">
          <Title>Mini blog</Title>
        </StyledLink>
      </header>
      <Routes>
        <Route path='/write' element={<PostWritePage />} />
        <Route index element={<MainPage />} />
        <Route path='/post/:postId' element={<PostViewPage />} />
      </Routes>
      <Footer>나의 미니 블로그</Footer>
    </div>
  );
}

export default App;
