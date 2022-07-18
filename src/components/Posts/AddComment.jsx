import { postComment } from "../../store/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";

const AddComment = ({ postId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
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
          dispatch(postComment({ comment: comment, postId: postId }));
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
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder='Start typing!'></textarea>
          <input type='submit' className='btn btn-ghost' value='save'></input>
        </div>
      </form>
    </section>
  );
};

export default AddComment;
