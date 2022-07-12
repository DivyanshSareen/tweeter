import { useSelector, useDispatch } from "react-redux/es/exports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrow,
  faRocket,
  faBookmark,
  faBell,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../store/auth/authSlice";

import "../styles/home.css";

const HomePage = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <>
      <div className='homepage'>
        <div className='sidebar-menu'>
          <div className='sidebar-logo'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faCrow} />
            Tweeter
          </div>
          <div className='sidebar-option'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faHome} />
            Home
          </div>
          <div className='sidebar-option'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faRocket} />
            Explore
          </div>
          <div className='sidebar-option'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faBookmark} />
            Bookmarks
          </div>
          <div className='sidebar-option'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faBell} />
            Notifications
          </div>
          <div className='sidebar-option'>
            <FontAwesomeIcon className='sidebar-logo--icon' icon={faUser} />
            Profile
          </div>
          <div className='sidebar-profile'>
            <div className='avatar'>
              <img
                src={require("../assets/landing1.jpg")}
                alt='avatar-img'></img>
            </div>
            <div className='sidebar-profile-info'>
              <p className='sidebar-actual--name'>
                {auth.firstName + " " + auth.lastName}
              </p>
              <p className='sidebar-user--name'>@{auth.userName}</p>
            </div>
          </div>
        </div>
        <div className='posts'>
          <section className='create-post'>
            <div className='avatar'>
              <img
                src={require("../assets/landing1.jpg")}
                alt='avatar-img'></img>
            </div>
            <form>
              <div className='text-area'>
                <label className='textarea-label' for='desc'>
                  What's on your mind?
                </label>
                <textarea
                  className='textarea-data'
                  cols='40'
                  rows='8'
                  id='desc'
                  placeholder='Start typing!'></textarea>
                <input type='submit' className='btn' value='post'></input>
              </div>
            </form>
          </section>
        </div>
        <div className='users'>yoo</div>
      </div>
      {/* Hello from HomePage UserName: {auth.userName}
      <button
        className='btn btn-ghost'
        onClick={() => {
          dispatch(logoutUser());
        }}>
        Logout
      </button> */}
    </>
  );
};

export default HomePage;
