import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";

const initialState = {
  members: [],
  status: "idle",
  error: null,
};

export const getNews = createAsyncThunk("news/getNews", async (search = "") => {
  const response = await privateService.get(`${URLs.news}${search}`);
  return response.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "success";
        state.news = action.payload.map((item) => {
          return {
            id: item.id,
            name: item.name,
            image: item.image,
            created_at: item.created_at,
            category_id: item.category_id
          };
        });
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;