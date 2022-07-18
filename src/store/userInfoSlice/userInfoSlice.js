import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userDetails: {
    _id: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    profilePicture: "default_pp.png",
    description: "",
    portfolioURL: "",
    followers: [],
    following: [],
    bookmarks: [],
  },
  authToken: "",
  userIsUpdated: false,
};

export const updateUserProfile = createAsyncThunk(
  "/userInfo/updateUserProfile",
  async (args, { dispatch, getState }) => {
    const state = getState();
    console.log(args);
    axios
      .post(
        "/api/users/edit",
        {
          userData: {
            description: args.description,
            portfolioURL: args.portfolioURL,
          },
        },
        { headers: { authorization: state.userInfo.authToken } }
      )
      .then((res) => dispatch(updateUserFollowingInfo(res.data.user)));
  }
);

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userDetails = action.payload.foundUser;
      state.authToken = action.payload.encodedToken;
    },
    updateUserFollowingInfo: (state, action) => {
      state.userDetails = action.payload;
    },
    updateUserBookmarksInfo: (state, action) => {
      state.userDetails.bookmarks = action.payload;
    },
  },
});

export const {
  updateUserInfo,
  updateUserFollowingInfo,
  updateUserBookmarksInfo,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
