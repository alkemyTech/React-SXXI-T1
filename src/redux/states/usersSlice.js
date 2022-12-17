import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import privateService from "Services/privateApiService";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async (url) => {
  const response = await privateService.get(url);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload.map((el) => {
          return {
            id: el.id,
            name: el.name,
            email: el.email,
          };
        });
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
