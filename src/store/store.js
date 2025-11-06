import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../feature/playerSlice";

const store = configureStore({
    reducer: {
        player: playerReducer,
  },
});

export default store;
