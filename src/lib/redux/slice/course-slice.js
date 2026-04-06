import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const DATA_LIMIT = 10;

// Async thunk to fetch public courses
export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async ({ filters = {} }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${BACKEND_API_BASE_URL}/api/public/courses`,
        params: filters,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch courses."
      );
    }
  }
);

export const fetchCourseCategory = createAsyncThunk(
  "course/fetchCourseCategory",
  async ({ filters = {} }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${BACKEND_API_BASE_URL}/api/public/category`,
        params: filters,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch category."
      );
    }
  }
);

export const fetchCourseSegments = createAsyncThunk(
  "course/fetchCourseSegments",
  async ({ filters = {} }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${BACKEND_API_BASE_URL}/api/public/courseSegment`,
        params: filters,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch segment."
      );
    }
  }
);
// Initial state
const initialState = {
  courseList: [],
  categories: [],
  segments: [],
  documentCount: 0,
  loading: true,
  error: null,
};

// Course slice
const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    resetCourseError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        const { data, count } = action.payload;
        state.courseList = data;
        state.documentCount = count;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCourseCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseCategory.fulfilled, (state, action) => {
        const { data, count } = action.payload;
        state.categories = data;
        // state.documentCount = count;
        state.loading = false;
      })
      .addCase(fetchCourseCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCourseSegments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseSegments.fulfilled, (state, action) => {
        const { data, count } = action.payload;
        state.segments = data;
        // state.documentCount = count;
        state.loading = false;
      })
      .addCase(fetchCourseSegments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCourseError } = courseSlice.actions;
export default courseSlice.reducer;
