import { createSlice } from "@reduxjs/toolkit";
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
