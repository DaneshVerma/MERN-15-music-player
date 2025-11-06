import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../data/data";

const index = Math.floor(Math.random() * songs.length);
const initialState = {
  isPlaying: false,
  currentSong: {
    title: songs[index].title,
    artist: songs[index].artist,
    songUrl: songs[index].songUrl,
    img: songs[index].img,
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    play: (state) => {
      state.isPlaying = true;
    },
  },
});
export default playerSlice.reducer;
export const { setCurrentSong, pause, play  } = playerSlice.actions;
