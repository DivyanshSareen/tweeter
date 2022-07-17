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
  const userInfo = useSelector((store) => store.userInfo);
  return (
    <div className='sidebar-menu'>
      <div className='sidebar-logo'>
        <FontAwesomeIcon className='sidebar-logo--icon' icon={faCrow} />
        Tweeter
      </div>
      <Link to='/home' className='sidebar-option'>
        <FontAwesomeIcon className='sidebar-logo--icon' icon={faHome} />
        Home
      </Link>
      <div className='sidebar-option'>
        <FontAwesomeIcon className='sidebar-logo--icon' icon={faRocket} />
        Explore
      </div>
      <Link to='bookmarks'>
        <div className='sidebar-option'>
          <FontAwesomeIcon className='sidebar-logo--icon' icon={faBookmark} />
          Bookmarks
        </div>
      </Link>
      <div className='sidebar-option'>
        <FontAwesomeIcon className='sidebar-logo--icon' icon={faBell} />
        Notifications
      </div>
      <Link to='profile'>
        <div className='sidebar-option'>
          <FontAwesomeIcon className='sidebar-logo--icon' icon={faUser} />
          Profile
        </div>
      </Link>
      <div className='sidebar-profile'>
        <div className='avatar'>
          <img
            src={require(`../../assets/${userInfo?.userDetails?.profilePicture}`)}
            alt='avatar-img'></img>
        </div>
        <div className='sidebar-profile-info'>
          <p className='sidebar-actual--name'>
            {userInfo?.userDetails?.firstName +
              " " +
              userInfo?.userDetails?.lastName}
          </p>
          <p className='sidebar-user--name'>
            @{userInfo?.userDetails?.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
