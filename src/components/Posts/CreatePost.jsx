import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/posts/postsSlice";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.userInfo);

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
          dispatch(
            createPost({
              content: post,
              firstName: userInfo.userDetails.firstName,
              lastName: userInfo.userDetails.lastName,
              profilePicture: userInfo.userDetails.profilePicture,
            })
          );
          setPost("");
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
