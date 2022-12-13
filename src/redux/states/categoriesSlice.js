import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { whatIs } from "utilities/parseDate";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

export const getCategories = createAsyncThunk("categories/getCategories", async (search = "") => {
  const response = await privateService.get(`${URLs.category}${search}`);
  return response.data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload.map((el) => {
          return {
            id: el.id,
            name: el.name,
            createdAt: whatIs("isString", el.created_at, "splice", "created_at"),
          };
        });
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
