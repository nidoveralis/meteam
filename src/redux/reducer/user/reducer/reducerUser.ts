import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},//JSON.parse(localStorage.getItem("userData")) || {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reducerUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { reducerUser } =
  userSlice.actions;

export default userSlice.reducer;
