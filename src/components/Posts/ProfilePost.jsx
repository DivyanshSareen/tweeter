import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deletePost } from "../../store/posts/postsSlice";
import {
  faHeart,
  faTrash,
  faPencil,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import UpdatePost from "./UpdatePost";
import { useState } from "react";

const ProfilePost = ({ post }) => {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className='post'>
      <Modal isHidden={isHidden} setIsHidden={setIsHidden}>
        <UpdatePost originalPost={post} />
      </Modal>
      <div className='avatar'>
        <img
          src={require("../../assets/" + post?.userImage)}
          alt='avatar-img'></img>
      </div>
      <div className='post-content'>
        <p className='post-author'>
          <b>
            {post?.firstName} {post?.lastName}
          </b>
          @{post?.username}
        </p>
        <p className='post-text'>{post?.content}</p>
        <div className='post-options'>
          <button
            className='btn btn-ghost'
            onClick={() => {
              setIsHidden(false);
            }}>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faPencil} />
          </button>
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
                deletePost({
                  path: "../api/posts/",
                  postId: post?._id,
                })
              );
            }}>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
