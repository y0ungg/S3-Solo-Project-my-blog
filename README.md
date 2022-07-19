# React-mini-blog
혼자 구현해보는 미니 블로그 웹 애플리케이션      


## Day 2  

`MainPage`에 글 목록을 노출하고, 제목을 클릭하면 해당 글의 제목과 내용, 댓글들이 나오는 `PostViewPage`로 이동한다.  
먼저 모든 기능 구현을 완료한 뒤에 styled-components로 꾸밀 예정이다.

<br />


### react-router-dom
`App.js`에서 `MainPage`, `PostViewPage`, `PostWritePage` 컴포넌트 분기
```jsx
<Route index element={<MainPage />}/> //메인 화면으로 설정하기
```

<br />

### useNavigate(), useParams()
Link는 path로 컴포넌트를 분기하는 element고, useNavigate는 event에 따라 url을 조작할 수 있는 인터페이스를 제공하는 Hook이다.  

- `useParams`: `App` 컴포넌트에서 `PostViewPage`를 Route할 때 `path=/post/:postId`로 설정하여 `PostWritePage` 컴포넌트에서 `postId` 값을 받아왔다.

- `useNavigate`: `MainPage`에서 글 목록을 render할 때 click 이벤트를 설정해주어서 인자로 받은 제목의 id값을 url 파라미터로 보내도록 navigating 했다.  

<br />

https://reactrouter.com/docs/en/v6/components/link
https://reactrouter.com/docs/en/v6/hooks/use-navigate  
https://reactrouter.com/docs/en/v6/hooks/use-search-params  
https://v5.reactrouter.com/web/api/Hooks/useparams

<br />
<br />

## Day 1    
필요한 컴포넌트 파일 생성 및 폴더로 분류  
export 및 import로 컴포넌트 연결 