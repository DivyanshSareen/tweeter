import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className='App'>
      <header className='landing'>
        <div className='landing-poster'>
          <img
            className='landing-poster--image'
            src={
              "https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            }
            alt='abstract-art-blue'></img>
          <FontAwesomeIcon className='landing-poster--icon' icon={faFeather} />
        </div>
        <div className='landing-content'>
          <FontAwesomeIcon icon={faFeather} />
          <div className='h3 landing-title'>Happening now</div>
          <div className='h4 landing-subtitle'>Join Tweeter today.</div>
          <div className='btn'>Log in</div>
          <div className='btn'>Sign up</div>
        </div>
      </header>
    </div>
  );
}

export default App;
