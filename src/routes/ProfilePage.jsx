import { useSelector, useDispatch } from "react-redux/es/exports";
import { logoutUser } from "../store/auth/authSlice";

const ProfilePage = () => {
  const userInfo = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  return (
    <div className='profile'>
      <div className='avatar avatar-l'>
        <img
          src={require(`../assets/${userInfo.userDetails.profilePicture}`)}
          alt='avatar-img'></img>
      </div>
      <h5 className='h5'>
        {userInfo.userDetails.firstName} {userInfo.userDetails.lastName}
      </h5>
      <p className='sub-title1'>@{userInfo.userDetails.username}</p>
      <div className='profile-options'>
        <button
          className='btn btn-ghost'
          onClick={() => {
            dispatch(logoutUser());
          }}>
          Logout
        </button>
        <button className='btn btn-ghost'>Edit</button>
      </div>
      <p className='paragraph1 center-text'>
        {userInfo.userDetails.description}
      </p>
      <p className='paragraph2'>
        <a
          target='_blank'
          href={userInfo.userDetails.portfolioURL}
          rel='noreferrer'>
          {userInfo.userDetails.portfolioURL}
        </a>
      </p>
      <div className='profile-stats'>
        <div className='paragraph1 center-text'>
          {userInfo.userDetails.following.length}
        </div>
        <div className='paragraph1 center-text'>
          {userInfo.userDetails.followers.length}
        </div>
        <div className='paragraph1'>Following</div>
        <div className='paragraph1'>Followers</div>
      </div>
    </div>
  );
};

export default ProfilePage;
