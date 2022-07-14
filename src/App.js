import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import HomePage from "./routes/HomePage";
import RequiresAuth from "./components/RequiresAuth/RequiresAuth";
import ErrorPage from "./routes/ErrorPage";
import Mockman from "mockman-js";
import RedirectOnAuth from "./components/RedirectOnAuth";

function App() {
  return (
    <div className='App'>
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
          path='home/*'
          element={
            <RequiresAuth>
              <HomePage />
            </RequiresAuth>
          }
        />

        <Route path='error' element={<ErrorPage />} />
        <Route path='mock' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
