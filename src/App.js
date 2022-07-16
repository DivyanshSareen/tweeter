import "./styles/App.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import HomePage from "./routes/HomePage";
import ProfilePage from "./routes/ProfilePage";
import UserPage from "./routes/UserPage";
import RequiresAuth from "./components/RequiresAuth/RequiresAuth";
import ErrorPage from "./routes/ErrorPage";
import Mockman from "mockman-js";
import RedirectOnAuth from "./components/RedirectOnAuth/RedirectOnAuth";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommendations from "./components/Users/Recommendations";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((store) => store.auth);
  return (
    <div className={auth.isLoggedIn ? "App" : ""}>
      {auth.isLoggedIn && <Sidebar />}
      <Routes>
        <Route
          path='/'
          element={
            <RedirectOnAuth>
              <LandingPage />
            </RedirectOnAuth>
          }
        />
        <Route
          path='login'
          element={
            <RedirectOnAuth>
              <LoginPage />
            </RedirectOnAuth>
          }
        />
        <Route
          path='signup'
          element={
            <RedirectOnAuth>
              <SignupPage />
            </RedirectOnAuth>
          }
        />
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
        <Route path='user/:userId' element={<UserPage />} />
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
