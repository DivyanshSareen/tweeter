import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <div className='post'>
      <div className='avatar'>
        <img src={require("../../assets/landing1.jpg")} alt='avatar-img'></img>
      </div>
      <div className='post-content'>
        <p className='post-author'>
          <b>Banco banco</b> @bancobanco
        </p>
        <p className='post-text'>
          CSS 3 can solve this problem. Unfortunately it's only supported on 60%
          of used browsers nowadays. For Internet Explorer and iOS you can't
          turn off resizing, but you ca
        </p>
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
