import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userName: "Bancobanco",
  password: "Banco123",
  isLoggedIn: false,
  status: "idle",
  userData: {},
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (args, { getState }) => {
    const state = getState();
    return await axios
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
    return await axios
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
      state.authToken = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
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
