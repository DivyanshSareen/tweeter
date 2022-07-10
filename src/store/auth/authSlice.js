import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userName: "bancobanco",
  password: "Banco123",
  remember_me: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateField } = authSlice.actions;

export default authSlice.reducer;
