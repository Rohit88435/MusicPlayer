import { createSlice } from "@reduxjs/toolkit";

const playListSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      let exist = state.find(
        (item) => item.songIndex == action.payload.songIndex
      );
      if (exist) {
        return;
      } else {
        state.push(action.payload);
      }
    },

    removeSong: (state, action) => {
      return state.filter((item) => item.songIndex !== action.payload);
    },
  },
});

export const { addSong, removeSong } = playListSlice.actions;

export default playListSlice.reducer;
