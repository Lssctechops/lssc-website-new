"use client";
import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./slice/blog-slice";
import courseReducer from "./slice/course-slice";
import cordinateSlice from "./slice/cordinate-slice";
import userSlice from "./slice/user-slice";
import courcesSlice from "./slice/courses-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      blog: blogReducer,
      course: courseReducer,
      cordinate: cordinateSlice,
      user: userSlice,
      cources: courcesSlice,
    },
    devTools: true,
  });
};

export const store = makeStore();
