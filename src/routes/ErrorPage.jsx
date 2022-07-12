import "../styles/error.css";

import logo from "../assets/error1.svg";

const ErrorPage = () => {
  return (
    <div className='error-screen'>
      <img className='error-image' alt='caged-bird' src={logo}></img>
      <h3 className='error-message h3'>
        Something is not right, please try again
      </h3>
    </div>
  );
};

export default ErrorPage;
