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

export const followUser = createAsyncThunk(
  "/users/followUser",
  async (userId, { getState }) => {
    const state = getState();
    console.log(state.auth.authToken);
    console.log(userId);
    axios
      .post(
        `api/users/follow/${userId}`,
        {},
        {
          headers: { authorization: state.userInfo.authToken },
        }
      )
      .catch((e) => console.log(e))
      .then((res) => console.log(res));
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
