import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className='rec-user'>
      <div className='avatar'>
        <img
          src={require(`../../assets/${user?.profilePicture}`)}
          alt='avatar-img'></img>
      </div>
      <div className='rec-user-indo'>
        <p className='recc-actual--name'>
          {user?.firstName} {user?.lastName}
        </p>
        <p className='recc-user--name'>@{user?.username}</p>
      </div>
      <Link to={user._id} className='rec-options'>
        <button className='btn btn-ghost'>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </Link>
    </div>
  );
};

export default User;
