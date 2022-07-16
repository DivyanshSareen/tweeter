import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const userInfo = useSelector((store) => store.userInfo);
  const createPost = () => {
    try {
      axios
        .post(
          `api/posts`,
          { post: "fdsafwerwerwerwer" },
          {
            headers: { authorization: userInfo.authToken },
          }
        )
        .then((res) => console.log(res));
    } finally {
      setPost("");
    }
  };
  return (
    <section className='create-post'>
      <div className='avatar'>
        <img
          src={require(`../../assets/${userInfo.userDetails.profilePicture}`)}
          alt='avatar-img'></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost();
        }}>
        <div className='text-area'>
          <label className='textarea-label' htmlFor='desc'>
            What's on your mind?
          </label>
          <textarea
            className='textarea-data'
            cols='40'
            rows='8'
            id='desc'
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
            placeholder='Start typing!'></textarea>
          <input type='submit' className='btn btn-ghost' value='post'></input>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
