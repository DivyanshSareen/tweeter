import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateField, signupUser } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";

const SignupPage = () => {
  const navigate = useNavigate();

  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(signupUser()).then(navigate("/home"));
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h5 className='h4 center-text login-head'>
          <FontAwesomeIcon icon={faCrow} /> Register
        </h5>
        <div className='input'>
          <label htmlFor='firstName' className='input-label'>
            First Name
          </label>
          <input
            name='firstName'
            type='text'
            className='input-data'
            value={auth.firstName}
            onChange={onChangeHandler}
            required></input>
        </div>
        <div className='input'>
          <label htmlFor='lastName' className='input-label'>
            Last Name
          </label>
          <input
            name='lastName'
            type='text'
            className='input-data'
            value={auth.lastName}
            onChange={onChangeHandler}
            required></input>
        </div>
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
