import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className='App'>
      <header className='landing'>
        <div className='landing-poster'>
          <img
            src={require("./assets/landing1.jpg")}
            alt='abstract-art-blue'></img>
        </div>
        <div className='landing-content'>
          <FontAwesomeIcon className='landing-content--icon' icon={faCrow} />
          <div className='h3 landing-title'>Happening now</div>
          <div className='h4 landing-subtitle'>
            Join <span className='landing-highlight'>Tweeter</span> today.
          </div>
          <div className='btn btn-ghost'>Log in</div>
          <div className='btn btn-ghost'>Sign up</div>
        </div>
      </header>
    </div>
  );
}

export default App;
