import { useDispatch } from "react-redux";
import { followUser } from "../../store/users/usersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Link to={"user/" + user._id} className='rec-user'>
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
      <div className='rec-options'>
        <button className='btn btn-ghost'>
          <FontAwesomeIcon
            className='sidebar-logo--icon'
            icon={faUserPlus}
            onClick={() => {
              dispatch(followUser(user._id));
            }}
          />
        </button>
      </div>
    </Link>
  );
};

export default User;
