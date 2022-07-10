import { Link } from "react-router-dom";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

const SignupPage = () => {
  return (
    <>
      <form>
        <h5 className='h4 center-text login-head'>
          <FontAwesomeIcon icon={faCrow} /> Register
        </h5>
        <div className='input'>
          <label htmlFor='email' className='input-label'>
            Email address
          </label>
          <input
            name='email'
            type='email'
            className='input-data'
            placeholder='example@gmail.com'
            required></input>
        </div>
        <div className='input'>
          <label htmlFor='password' className='input-label'>
            Password
          </label>
          <input
            name='password'
            type='password'
            id='password'
            className='input-data'
            placeholder='********'
            required></input>
        </div>
        <input
          type='submit'
          className='btn btn-ghost btn-login center-text'></input>
        <Link to='/login'>
          <div className='signup paragraph1 center-text'>
            Already have an Account?{" "}
            <i className='fa-solid fa-chevron-right'></i>
          </div>
        </Link>
      </form>
    </>
  );
};

export default SignupPage;
