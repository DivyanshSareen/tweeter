import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userName: "Bancobanco",
  password: "Banco123",
  firstName: "",
  lastName: "",
  profilePicture: "default_pp.png",
  remember_me: true,
  authToken: "",
  isLoggedIn: false,
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
      .then((res) => res.data);
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
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        profilePicture: "default_pp.png",
      })
      .then((res) => res.data);
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
      state.firstName = action.payload.foundUser.firstName;
      state.lastName = action.payload.foundUser.lastName;
      state.userName = action.payload.foundUser.username;
      state.profilePicture = action.payload.foundUser.profilePicture;
      state.description = action.payload.foundUser.description;
      state.portfolioURL = action.payload.foundUser.portfolioURL;
      state.authToken = action.payload.encodedToken;
      if (state.remember_me === true) {
        window.localStorage.setItem("authToken", action.payload.encodedToken);
        window.localStorage.setItem(
          "userName",
          action.payload.foundUser.username
        );
        window.localStorage.setItem(
          "password",
          action.payload.foundUser.password
        );
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
