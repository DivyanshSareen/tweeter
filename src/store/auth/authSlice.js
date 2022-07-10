import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "bancobanco@gmail.com",
  password: "bancobanco",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
