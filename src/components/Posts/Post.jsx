import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className='post'>
      <div className='avatar'>
        <img src={require("../../assets/landing1.jpg")} alt='avatar-img'></img>
      </div>
      <div className='post-content'>
        <p className='post-author'>
          <b>Banco banco</b> @{post.username}
        </p>
        <p className='post-text'>{post.content}</p>
        <div className='post-options'>
          <button className='btn btn-ghost'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faHeart} />
          </button>
          <button className='btn btn-ghost'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faComment} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
