import { createSlice } from "@reduxjs/toolkit";

const LikeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    likeSong: (state, action) => {
      let exist = state.find(
        (item) => item.songIndex === action.payload.songIndex
      );
      if (exist) {
        return;
      } else {
        state.push(action.payload);
      }
    },

    removeLike: (state, action) => {
      return state.filter((item) => item.songIndex !== action.payload);
    },
  },
});

export const { likeSong, removeLike } = LikeSlice.actions;

export default LikeSlice.reducer;
