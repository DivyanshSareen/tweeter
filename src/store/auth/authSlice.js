import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userName: "bancobanco",
  password: "Banco123",
  remember_me: true,
  authToken: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (args, { getState }) => {
    const state = getState();
    try {
      return axios
        .post("api/auth/login", {
          userName: state.auth.userName,
          password: state.auth.password,
        })
        .then((res) => res.data.encodedToken);
    } catch (e) {
      return console.log(e);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { updateField } = authSlice.actions;

export default authSlice.reducer;
