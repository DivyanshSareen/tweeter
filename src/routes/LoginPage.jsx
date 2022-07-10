import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const { auth } = useSelector((store) => store.auth);
  console.log(auth);
  return (
    <>
      <form>
        <h5 className='h4 center-text login-head'>
          <FontAwesomeIcon icon={faCrow} /> Sign In
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
        <div className='options'>
          <div className='input remember-check'>
            <input
              name='remember_me'
              type='checkbox'
              className='input-data'
              id='remember'></input>
            <label htmlFor='remember_me'>Remember me</label>
          </div>
        </div>
        <input
          type='submit'
          className='btn btn-ghost btn-login center-text'></input>
        <Link to='/signup'>
          <div className='signup paragraph1 center-text'>
            Create New Account <i className='fa-solid fa-chevron-right'></i>
          </div>
        </Link>
      </form>
    </>
  );
};

export default LoginPage;
