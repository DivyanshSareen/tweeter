import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className='rec-user'>
      <Link to={user._id} className='avatar'>
        <img
          src={require(`../../assets/${user?.profilePicture}`)}
          alt='avatar-img'></img>
      </Link>
      <Link to={user._id} className='rec-user-indo'>
        <p className='recc-actual--name'>
          {user?.firstName} {user?.lastName}
        </p>
        <p className='recc-user--name'>@{user?.username}</p>
      </Link>

      <Link to={user._id} className='rec-options'></Link>
    </div>
  );
};

export default User;
