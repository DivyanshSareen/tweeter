import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postsList: [],
  status: "idle",
};

export const getListOfPosts = createAsyncThunk(
  "/posts/getListOfUsers",
  async (args) => {
    return axios.get("api/posts").then((res) => res.data.posts);
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getListOfPosts.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.status = "fulfilled";
    },
    [getListOfPosts.pending]: (state) => {
      state.status = "pending";
    },
  },
});

export default postsSlice.reducer;
