import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = window.localStorage.getItem("authToken");
console.log(token);
const initialState = {
  userName: "bancobanco",
  password: "Banco123",
  remember_me: true,
  authToken: token !== null ? token : "",
  isLoggedIn: token !== null ? true : false,
  status: "idle",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (args, { getState }) => {
    const state = getState();
    return axios
      .post("api/auth/login", {
        username: state.auth.userName,
        password: state.auth.password,
      })
      .then((res) => res.data.encodedToken);
  }
);

export const signupUser = createAsyncThunk(
  "/auth/signupUser",
  async (args, { getState }) => {
    const state = getState();
    return axios
      .post("/api/auth/signup", {
        username: state.auth.userName,
        password: state.auth.password,
      })
      .then((res) => res.data.encodedToken);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    logoutUser: (state, action) => {
      window.localStorage.clear("authToken");
      state.authToken = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.authToken = action.payload;
      if (state.remember_me === true) {
        window.localStorage.setItem("authToken", action.payload.encodedToken);
      }
      state.isLoggedIn = true;
      state.status = "fulfilled";
    },
    [loginUser.pending]: (state) => {
      state.status = "pending";
    },
    [loginUser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const { updateField, logoutUser } = authSlice.actions;

export default authSlice.reducer;
