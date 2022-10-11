import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/MovieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
