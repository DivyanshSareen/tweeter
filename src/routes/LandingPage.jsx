import "../styles/landing.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const LandingPage = () => {
  const auth = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoggedIn === true) navigate("/home", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
