import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrow,
  faRocket,
  faBookmark,
  faBell,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ auth }) => {
  return (
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
            src={require("../../assets/landing1.jpg")}
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
  );
};

export default Sidebar;
