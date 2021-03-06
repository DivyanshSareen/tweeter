import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSpecificPost,
  bookmarkPost,
  likePost,
} from "../store/posts/postsSlice";
import Loading from "../components/Loading/Loading";
import Comment from "../components/Posts/Comment";
import Modal from "../components/Modal/Modal";
import AddComment from "../components/Posts/AddComment";
import "../styles/post-page.css";

const PostPage = () => {
  const params = useParams();
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    dispatch(getSpecificPost({ postId: params.postId, path: "/api/posts/" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.postId]);
  useEffect(() => {
    console.log("run");
    dispatch(getSpecificPost({ postId: params.postId, path: "/api/posts/" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.commentPostStatus]);
  return posts.specificPostStatus === "fulfilled" ? (
    <div className='post-page'>
      <section className='post'>
        <Modal isHidden={isHidden} setIsHidden={setIsHidden}>
          <AddComment postId={posts?.specificPost?._id} />
        </Modal>
        <div className='avatar'>
          <img
            src={require("../assets/" + posts?.specificPost?.userImage)}
            alt='avatar-img'></img>
        </div>
        <div className='post-content'>
          <p className='post-author'>
            <b>
              {posts?.specificPost?.firstName} {posts?.specificPost?.lastName}
            </b>
            @{posts?.specificPost?.username}
          </p>
          <p className='post-text'>{posts?.specificPost?.content}</p>
        </div>
        <div className='post-option'>
          <button
            className='btn btn-ghost'
            onClick={() => {
              dispatch(
                likePost({
                  path: "../api/posts/like/",
                  postId: posts?.specificPost?._id,
                })
              );
            }}>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faHeart} />
          </button>
          <button
            className='btn btn-ghost'
            onClick={() => {
              dispatch(
                bookmarkPost({
                  path: "../api/users/bookmark/",
                  postId: posts?.specificPost?._id,
                })
              );
            }}>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faBookmark} />
          </button>
          <button
            className='btn btn-ghost'
            onClick={() => {
              setIsHidden(false);
            }}>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faComment} />
          </button>
        </div>
      </section>
      <section className='comments'>
        {posts?.specificPost?.comments?.map((comment) => (
          <Comment key={comment?._id} comment={comment} />
        ))}
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default PostPage;
