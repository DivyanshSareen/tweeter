import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrow,
  faRocket,
  faBookmark,
  faBell,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const auth = useSelector((store) => store.auth);
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
      <Link to='/home/profile'>
        <div className='sidebar-option'>
          <FontAwesomeIcon className='sidebar-logo--icon' icon={faUser} />
          Profile
        </div>
      </Link>
      <div className='sidebar-profile'>
        <div className='avatar'>
          <img
            src={require(`../../assets/${auth?.profilePicture}`)}
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
