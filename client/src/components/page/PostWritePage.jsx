import { useState } from "react";

const PostWritePage = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [id, CountId] = useState(7);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeStory = (event) => {
    setStory(event.target.value);
  };

  const onSubmitInput = (event) => {
    event.preventDefault();
    CountId(id + 1);
    const newPost = {
      'id': id,
      'title': title,
      'content': story,
      'comments': [
        {'id': 1,
        'content': '잘보고갑니다'
      }]
    }
    //data에 새 글 추가
  }

  return (
    <>
      <form onSubmit={onSubmitInput}>
        <div>
          글제목
          <input
            onChange={handleChangeTitle}
            id="title"
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            value={title}
          ></input>
        </div>
        <textarea
          onChange={handleChangeStory}
          name="story"
          type="text"
          placeholder="내용을 입력해주세요"
          value={story}
        ></textarea>
        <section>
          <input type="submit" value="작성완료"></input>
        </section>
      </form>
    </>
  );
};

export default PostWritePage;
