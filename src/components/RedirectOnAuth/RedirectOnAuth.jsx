import { useSelector, useDispatch } from "react-redux/es/exports";
import { updateField, loginUser } from "../../store/auth/authSlice";
import { updateUserInfo } from "../../store/userInfoSlice/userInfoSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RedirectOnAuth = ({ children }) => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (authToken !== null) {
      const userName = window.localStorage.getItem("userName");
      const password = window.localStorage.getItem("password");
      if (auth.status === "fulfilled") {
        dispatch(updateUserInfo(auth.userData));
      }
      dispatch(updateField({ field: "userName", value: userName }));
      dispatch(updateField({ field: "password", value: password }));
      dispatch(loginUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status, auth.isLoggedIn]);

  return auth.isLoggedIn === false ? children : <Navigate to='/home' replace />;
};

export default RedirectOnAuth;
