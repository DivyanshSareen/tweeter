import { useSelector, useDispatch } from "react-redux/es/exports";
import { logoutUser } from "../store/auth/authSlice";

const ProfilePage = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <div className='profile'>
      <div className='avatar avatar-l'>
        <img
          src={require(`../assets/${auth.profilePicture}`)}
          alt='avatar-img'></img>
      </div>
      <h5 className='h5'>
        {auth.firstName} {auth.lastName}
      </h5>
      <p className='sub-title1'>@{auth.userName}</p>
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
      <p className='paragraph1  center-text'>
        Learning Web Developement | 100 Days of Code | React and JavaScript |
        DSA | Blogging
      </p>
      <p className='paragraph2'>
        <a
          target='_blank'
          href='https://divyanshsareen.netlify.app/'
          rel='noreferrer'>
          https://divyanshsareen.netlify.app/
        </a>
      </p>
    </div>
  );
};

export default ProfilePage;
