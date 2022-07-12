import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const RequiresAuth = ({ children }) => {
  const auth = useSelector((store) => store.auth);

  return auth.isLoggedIn ? children : <Navigate to='/login' replace />;
};

export default RequiresAuth;
