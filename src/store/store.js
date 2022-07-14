import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import usersReducer from "./users/usersSlice";
import userInfoReducer from "./userInfoSlice/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    auth: authReducer,
    users: usersReducer,
  },
});
