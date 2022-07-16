import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import HomePage from "./routes/HomePage";
import ProfilePage from "./routes/ProfilePage";
import RequiresAuth from "./components/RequiresAuth/RequiresAuth";
import ErrorPage from "./routes/ErrorPage";
import Mockman from "mockman-js";
import RedirectOnAuth from "./components/RedirectOnAuth/RedirectOnAuth";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommendations from "./components/Users/Recommendations";

function App() {
  return (
    <div className='App'>
      <Sidebar />
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
        <Route path='error' element={<ErrorPage />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>

      <div className='users'>
        <Recommendations />
      </div>
    </div>
  );
}

export default App;
