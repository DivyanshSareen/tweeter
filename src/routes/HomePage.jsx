import { useSelector, useDispatch } from "react-redux/es/exports";
// import { logoutUser } from "../store/auth/authSlice";
import Sidebar from "../components/Sidebar/Sidebar";
import CreatePost from "../components/Posts/CreatePost";
import Post from "../components/Posts/Post";
import Recommendations from "../components/Users/Recommendations";

import "../styles/home.css";

const HomePage = () => {
  const auth = useSelector((store) => store.auth);
  // const dispatch = useDispatch();
  return (
    <>
      <div className='homepage'>
        <Sidebar auth={auth} />
        <div className='posts'>
          <CreatePost />
          <section className='timeline'>
            <Post />
            <Post />
            <Post />
          </section>
        </div>
        <div className='users'>
          <Recommendations />
        </div>
      </div>
      {/* Hello from HomePage UserName: {auth.userName}
      <button
        className='btn btn-ghost'
        onClick={() => {
          dispatch(logoutUser());
        }}>
        Logout
      </button> */}
    </>
  );
};

export default HomePage;
