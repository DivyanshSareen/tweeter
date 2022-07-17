import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateField, loginUser } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

const LoginPage = () => {
  const navigate = useNavigate();

  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.status === "fulfilled" && auth.isLoggedIn === true)
      navigate("/home", { replace: true });
    if (auth.status === "error") navigate("/error", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status, auth.isLoggedIn]);

  const onChangeHandler = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser());
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h5 className='h4 center-text login-head'>
          <FontAwesomeIcon icon={faCrow} />{" "}
          {auth.status === "rejected" ? "Try Again" : "Sign In"}
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
        {auth.status === "pending" ? (
          <Loading />
        ) : (
          <input
            type='submit'
            className='btn btn-ghost btn-login center-text'></input>
        )}

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
