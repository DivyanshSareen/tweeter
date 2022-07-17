import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserBookmarksInfo } from "../userInfoSlice/userInfoSlice";
import axios from "axios";

const initialState = {
  postsList: [],
  status: "idle",
  specificPost: {},
  specificPostStatus: "idle",
};

export const getListOfPosts = createAsyncThunk(
  "/posts/getListOfUsers",
  async (args) => {
    return axios.get("api/posts").then((res) => res.data.posts);
  }
);

export const getSpecificPost = createAsyncThunk(
  "/posts/getSpecificPost",
  async (args) => {
    // args -> {postId: "postId_value", path: "path_value"}
    return await axios
      .get(args.path + args.postId)
      .then((res) => res.data.post);
  }
);

export const bookmarkPost = createAsyncThunk(
  "/posts/bookmarkPost",

  async (args, { dispatch, getState }) => {
    console.log(args);
    const state = getState();
    await axios
      .post(
        args.path + args.postId,
        {},
        {
          headers: { authorization: state.userInfo.authToken },
        }
      )
      .then((res) => dispatch(updateUserBookmarksInfo(res.data.bookmarks)));
  }
);

export const likePost = createAsyncThunk(
  "/posts/likePost",
  async (args, { dispatch, getState }) => {
    const state = getState();
    await axios
      .post(
        `${args.path + args.postId}`,
        {},
        { headers: { authorization: state.userInfo.authToken } }
      )
      .catch((e) => console.log(e))
      .then((res) => dispatch(updatePostsList(res.data.posts)));
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updatePostsList: (state, action) => {
      state.postsList = action.payload;
    },
  },
  extraReducers: {
    [getListOfPosts.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.status = "fulfilled";
    },
    [getListOfPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getSpecificPost.fulfilled]: (state, action) => {
      state.specificPost = action.payload;
      state.specificPostStatus = "fulfilled";
    },
  },
});

export const { updatePostsList } = postsSlice.actions;

export default postsSlice.reducer;
