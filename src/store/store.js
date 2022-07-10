import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

console.log(authReducer);

const store = configureStore({
  reducer: { auth: authReducer },
});

export { store };
