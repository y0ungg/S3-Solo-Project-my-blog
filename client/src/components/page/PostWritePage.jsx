import { useEffect, useState } from "react";
import { addPost } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const PostWritePage = () => {
  const state = useSelector(state => state.postReducer);
  const { post } = state;
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [id, CountId] = useState(Math.max(...(post.map(v => {return v.id}))));
  const dispatch = useDispatch();

  useEffect(() => {
    CountId(id => id + 1)
  },[])

  const onSubmitInput = (event) => {
    CountId(id => id + 1)
    event.preventDefault();
    const newPost = {
      'id': id,
      'title': title,
      'content': story,
      'comments': []
    }
    //data에 새 글 추가
    dispatch(addPost(newPost))
  }

  return (
    <>
      <form onSubmit={onSubmitInput}>
        <div>
          글제목
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            id="title"
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
          ></input>
        </div>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          name="story"
          type="text"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <section>
          <input type="submit" value="작성완료"></input>
        </section>
      </form>
    </>
  );
};

export default PostWritePage;
