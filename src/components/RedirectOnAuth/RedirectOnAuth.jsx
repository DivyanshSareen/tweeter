import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { updateField } from "../../store/auth/authSlice";
import { loginUser } from "../../store/auth/authSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RedirectOnAuth = ({ children }) => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (authToken !== null) {
      const userName = window.localStorage.getItem("userName");
      const password = window.localStorage.getItem("password");
      dispatch(updateField({ field: "userName", value: userName }));
      dispatch(updateField({ field: "password", value: password }));
      dispatch(loginUser());
    }
    if (auth.isLoggedIn === true) navigate("/home", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (auth.status === "fulfilled" && auth.isLoggedIn === true)
      navigate("/home", { replace: true });
    if (auth.status === "error") navigate("/error", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status, auth.isLoggedIn]);

  return auth.isLoggedIn === false ? children : <Navigate to='/home' replace />;
};

export default RedirectOnAuth;
