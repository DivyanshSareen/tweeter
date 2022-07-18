import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserBookmarksInfo } from "../userInfoSlice/userInfoSlice";
import axios from "axios";

const initialState = {
  postsList: [],
  status: "idle",
  createPostStatus: "idle",
  specificPost: {},
  specificPostStatus: "idle",
  userPostsList: [],
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
      .then((res) => dispatch(updatePostsList(res.data.posts)));
  }
);

export const createPost = createAsyncThunk(
  "/posts/createPost",
  async (args, { dispatch, getState }) => {
    const state = getState();
    axios
      .post(
        `api/posts`,
        {
          postData: {
            content: args.content,
            firstName: args.firstName,
            lastName: args.lastName,
            userImage: args.profilePicture,
          },
        },
        {
          headers: { authorization: state.userInfo.authToken },
        }
      )
      .then((res) => res.data.posts)
      .then((posts) => dispatch(updatePostsList(posts)));
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (args, { dispatch, getState }) => {
    const state = getState();
    await axios
      .delete("/api/posts/" + args.postId, {
        headers: { authorization: state.userInfo.authToken },
      })
      .then((res) => console.log(res.data));
  }
);

export const getPostsByUser = createAsyncThunk(
  "/posts/getPostsByUser",
  async (username, { dispatch, getState }) => {
    return await axios
      .get("/api/posts/user/" + username)
      .then((res) => res.data.posts);
  }
);

export const updatePost = createAsyncThunk(
  "/posts/updatePost",
  async (args, { dispatch, getState }) => {
    const state = getState();
    console.log(args);
    return await axios
      .post(
        "/api/posts/edit/" + args._id,
        {
          postData: {
            content: args.content,
            firstName: args.firstName,
            lastName: args.lastName,
            userImage: args.profilePicture,
          },
        },
        { headers: { authorization: state.userInfo.authToken } }
      )
      .then((res) => {
        dispatch(getPostsByUser(state.userInfo.userDetails.username));
        return res.data.posts;
      });
  }
);

export const postComment = createAsyncThunk(
  "/posts/postComment",
  async (args, { dispatch, getState }) => {
    const state = getState();
    return axios.post(
      `/api/comments/add/${args.postId}`,
      { commentData: { args: "fsdf" } },
      { headers: { authorization: state.userInfo.authToken } }
    );
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
    [createPost.pending]: (state) => {
      state.createPostStatus = "pending";
    },
    [createPost.fulfilled]: (state, action) => {
      state.createPostStatus = "fulfilled";
    },
    [deletePost.pending]: (state, action) => {
      state.status = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.status = "fulfilled";
    },
    [getPostsByUser.fulfilled]: (state, action) => {
      state.userPostsList = action.payload;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.postsList = action.payload;
    },
  },
});

export const { updatePostsList } = postsSlice.actions;

export default postsSlice.reducer;
