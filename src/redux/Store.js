import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./PlaylistSlice";
import LikeSlice from "./LikeSlice";
export const Store = configureStore({
  reducer: {
    playlist: playlistSlice,
    like: LikeSlice,
  },
});
