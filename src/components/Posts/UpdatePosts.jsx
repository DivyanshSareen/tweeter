import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../store/posts/postsSlice";

const UpdatePosts = ({ originalPost }) => {
  const [postContent, setPostContent] = useState(originalPost.content);
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
          dispatch(updatePost({ ...originalPost, content: postContent }));
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
            value={postContent}
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
            placeholder='Start typing!'></textarea>
          <input type='submit' className='btn btn-ghost' value='save'></input>
        </div>
      </form>
    </section>
  );
};

export default UpdatePosts;
