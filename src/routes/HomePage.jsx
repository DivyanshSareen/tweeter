import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import CreatePost from "../components/Posts/CreatePost";
import Post from "../components/Posts/Post";
import Recommendations from "../components/Users/Recommendations";

import "../styles/home.css";
import ProfilePage from "./ProfilePage";

const HomePage = () => {
  return (
    <>
      <div className='homepage'>
        <Sidebar />
        <div className='posts'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <CreatePost />
                  <section className='timeline'>
                    <Post />
                    <Post />
                    <Post />
                  </section>
                </>
              }></Route>
            <Route path='profile' element={<ProfilePage />}></Route>
          </Routes>
        </div>
        <div className='users'>
          <Recommendations />
        </div>
      </div>
    </>
  );
};

export default HomePage;
