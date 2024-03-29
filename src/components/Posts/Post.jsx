import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bookmarkPost } from "../../store/posts/postsSlice";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div className='post'>
      <div className='avatar'>
        <img
          src={require("../../assets/" + post?.userImage)}
          alt='avatar-img'></img>
      </div>
      <div className='post-content'>
        <Link to={"../posts/" + post?._id}>
          <p className='post-author'>
            <b>
              {post?.firstName} {post?.lastName}
            </b>
            @{post?.username}
          </p>
          <p className='post-text'>{post?.content}</p>
        </Link>
        <div className='post-options'>
          <div>
            {post?.likes?.likeCount}
            <FontAwesomeIcon className='post-logo--icon' icon={faHeart} />
          </div>
          <div>
            {post?.comments?.length}
            <FontAwesomeIcon className='post-logo--icon' icon={faComment} />
          </div>
          <button
            className='btn btn-ghost'
            onClick={() => {
              dispatch(
                bookmarkPost({
                  path: "../api/users/bookmark/",
                  postId: post?._id,
                })
              );
            }}>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faBookmark} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
