import { useSelector, useDispatch } from "react-redux/es/exports";
import { logoutUser } from "../store/auth/authSlice";

const HomePage = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <>
      Hello from HomePage UserName: {auth.userName}
      <button
        className='btn btn-ghost'
        onClick={() => {
          dispatch(logoutUser());
        }}>
        Logout
      </button>
    </>
  );
};

export default HomePage;
