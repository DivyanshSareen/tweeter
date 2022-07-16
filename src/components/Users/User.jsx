import { Link } from "react-router-dom";

const User = ({ user }) => {
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
    </Link>
  );
};

export default User;
