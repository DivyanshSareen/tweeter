import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateField, loginUser } from "../store/auth/authSlice";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginUser());
        }}>
        <h5 className='h4 center-text login-head'>
          <FontAwesomeIcon icon={faCrow} /> Sign In
        </h5>
        <div className='input'>
          <label htmlFor='userName' className='input-label'>
            User Name
          </label>
          <input
            name='userName'
            type='text'
            className='input-data'
            value={auth.userName}
            onChange={onChangeHandler}
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
            value={auth.password}
            onChange={onChangeHandler}
            required></input>
        </div>
        <div className='options'>
          <div className='input remember-check'>
            <input
              name='remember_me'
              type='checkbox'
              className='input-data'
              defaultChecked={auth.remember_me}
              onChange={onChangeHandler}
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
