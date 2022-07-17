import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserFollowingInfo } from "../userInfoSlice/userInfoSlice";
import axios from "axios";

const initialState = {
  listOfUsers: [],
  specificUser: {},
  followStatus: "idle",
  userListStatus: "idle",
  specificUserStatus: "idle",
  updatedUserInfo: {},
};

export const getListOfUsers = createAsyncThunk(
  "/users/getListOfUsers",
  async (args, { getState }) => {
    return axios.get("/api/users").then((res) => res.data.users);
  }
);

export const followUser = createAsyncThunk(
  "/users/followUser",
  async (userId, { dispatch, getState }) => {
    const state = getState();
    return axios
      .post(
        `api/users/follow/${userId}`,
        {},
        {
          headers: { authorization: state.userInfo.authToken },
        }
      )
      .then((res) => {
        dispatch(updateUserFollowingInfo(res.data.user));
        updateListOfUsers(res.data.followUser);
      });
  }
);

export const getSpecificUser = createAsyncThunk(
  "/users/getSpecifiUser",
  async (userId, { getState }) => {
    return await axios
      .get("api/users/" + userId)
      .catch((e) => console.log(e))
      .then((res) => res.data.user);
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateListOfUsers: (state, action) => {
      const followUser = action.payload;
      const index = state.listOfUsers.findIndex(
        (user) => user._id === followUser._id
      );
      state.listOfUsers[index] = followUser;
    },
  },
  extraReducers: {
    [getListOfUsers.fulfilled]: (state, action) => {
      state.listOfUsers = action.payload;
      state.userListStatus = "fulfilled";
    },
    [getSpecificUser.fulfilled]: (state, action) => {
      state.specificUser = action.payload;
      state.specificUserStatus = "fulfilled";
    },
  },
});

export const { updateListOfUsers } = usersSlice.actions;
export default usersSlice.reducer;
