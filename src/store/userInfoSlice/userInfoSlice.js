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
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userDetails = action.payload.foundUser;
      state.authToken = action.payload.encodedToken;
      console.log(action.payload);
    },
  },
});

export const { updateUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
