import "../styles/landing.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <header className='landing'>
      <div className='landing-poster'>
        <img
          src={require("../assets/landing1.jpg")}
          alt='abstract-art-blue'></img>
      </div>
      <div className='landing-content'>
        <FontAwesomeIcon className='landing-content--icon' icon={faCrow} />
        <div className='h3 landing-title'>Happening now</div>
        <div className='h4 landing-subtitle'>
          Join <span className='landing-highlight'>Tweeter</span> today.
        </div>
        <Link to='/login'>
          <div className='btn btn-ghost'>Log in</div>
        </Link>
        <Link to='/signup'>
          <div className='btn btn-ghost'>Sign up</div>
        </Link>
      </div>
    </header>
  );
};

export default LandingPage;
