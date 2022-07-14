import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listOfUsers: [],
};

export const getListOfUsers = createAsyncThunk(
  "/users/getListOfUsers",
  async (args, { getState }) => {
    const state = getState();
    return axios
      .get("/api/users")
      .then((res) => res.data.users)
      .then((data) =>
        data.filter((ele) => ele.username !== state?.auth?.userName)
      );
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getListOfUsers.fulfilled]: (state, action) => {
      state.listOfUsers = action.payload;
    },
  },
});

export default usersSlice.reducer;
