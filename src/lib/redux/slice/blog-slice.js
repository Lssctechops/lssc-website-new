import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Async thunk to fetch all blogs
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (option, { rejectWithValue }) => {
    const { filters = {} } = option || {};
    try {
      const response = await axios({
        method: "GET",
        url: `${BACKEND_API_BASE_URL}/api/public/blog`,
        params: { ...filters },
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch blogs."
      );
    }
  }
);

// Async thunk to like a post
export const likePost = createAsyncThunk(
  "blog/likePost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${BACKEND_API_BASE_URL}/api/blog/${postId}/like`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to like the blog."
      );
    }
  }
);

// Initial state
const initialState = {
  blogList: [],
  documentCount: 0,
  loading: false,
  dataLoading: true,
  error: null,
};

// Blog slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Like post
      .addCase(likePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(likePost.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        const { data, count } = action.payload;
        state.dataLoading = false;
        state.blogList = data || [];
        state.documentCount = count || 0;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = blogSlice.actions;
export default blogSlice.reducer;
