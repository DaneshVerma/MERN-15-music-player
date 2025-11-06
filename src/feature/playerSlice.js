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
    prev: (state) => {
      const currentIndex = songs.findIndex(
        (song) => song.title === state.currentSong.title
      );
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
      state.currentSong = songs[prevIndex];
    },
    next: (state) => {
      const currentIndex = songs.findIndex(
        (song) => song.title === state.currentSong.title
      );
      const nextIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;
      state.currentSong = songs[nextIndex];
    },
  },
});
export default playerSlice.reducer;
export const { setCurrentSong, pause, play, prev, next } = playerSlice.actions;
