import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listOfUsers: [],
  listOfRecommendedUsers: [],
  followStatus: "idle",
  userListStatus: "idle",
  updatedUserInfo: {},
};

export const getListOfUsers = createAsyncThunk(
  "/users/getListOfUsers",
  async (args, { getState }) => {
    const state = getState();
    return axios
      .get("/api/users")
      .then((res) => res.data.users)
      .then((users) =>
        users.filter((user) => user._id !== state.userInfo.userDetails._id)
      );
  }
);

export const followUser = createAsyncThunk(
  "/users/followUser",
  async (userId, { getState }) => {
    const state = getState();
    return axios
      .post(
        `api/users/follow/${userId}`,
        {},
        {
          headers: { authorization: state.userInfo.authToken },
        }
      )
      .then((res) => res.data);
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterRecommendedUsers: (state, action) => {
      if (action.payload.following !== undefined) {
        state.listOfRecommendedUsers = state.listOfUsers
          .filter((user) => user._id !== action.payload._id)
          .filter(
            (user) =>
              action.payload.following.some((ele) => ele._id === user._id) ===
              false
          );
      } else
        state.listOfRecommendedUsers = state.listOfUsers.filter(
          (user) => user._id !== action.payload._id
        );
    },
  },
  extraReducers: {
    [getListOfUsers.fulfilled]: (state, action) => {
      state.listOfUsers = action.payload;
      state.listOfRecommendedUsers = action.payload;
      state.userListStatus = "fulfilled";
    },
    [followUser.pending]: (state) => {
      state.followStatus = "pending";
    },
    [followUser.fulfilled]: (state, action) => {
      state.updatedUserInfo = action.payload.user;
      state.followStatus = "followed";
    },
  },
});

export const { filterRecommendedUsers } = usersSlice.actions;

export default usersSlice.reducer;
