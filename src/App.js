import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import HomePage from "./routes/HomePage";
import ProfilePage from "./routes/ProfilePage";
import UserPage from "./routes/UserPage";
import PostPage from "./routes/PostPage";
import BookmarksPage from "./routes/BookmarksPage";
import RequiresAuth from "./components/RequiresAuth/RequiresAuth";
import ErrorPage from "./routes/ErrorPage";
import Mockman from "mockman-js";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommendations from "./components/Users/Recommendations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateUserInfo } from "./store/userInfoSlice/userInfoSlice";

function App() {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.status === "fulfilled") {
      dispatch(updateUserInfo(auth.userData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.status]);
  return (
    <div className={auth.isLoggedIn ? "App" : ""}>
      {auth.isLoggedIn && <Sidebar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route
          path='home'
          element={
            <RequiresAuth>
              <HomePage />
            </RequiresAuth>
          }
        />
        <Route
          path='profile'
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        />
        <Route
          path='/:userId'
          element={
            <RequiresAuth>
              <UserPage />
            </RequiresAuth>
          }
        />
        <Route
          path='posts/:postId'
          element={
            <RequiresAuth>
              <PostPage />
            </RequiresAuth>
          }
        />
        <Route
          path='bookmarks'
          element={
            <RequiresAuth>
              <BookmarksPage />
            </RequiresAuth>
          }
        />
        <Route path='error' element={<ErrorPage />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>

      {auth.isLoggedIn && (
        <div className='users'>
          <Recommendations />
        </div>
      )}
    </div>
  );
}

export default App;
