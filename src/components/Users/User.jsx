import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

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
          {user.firstName} {user.lastName}
        </p>
        <p className='recc-user--name'>@{user?.username}</p>
      </div>
      <div className='rec-options'>
        <button className='btn btn-ghost'>
          <FontAwesomeIcon className='sidebar-logo--icon' icon={faUserPlus} />
        </button>
      </div>
    </div>
  );
};

export default User;
