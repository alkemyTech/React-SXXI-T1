import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";

const initialState = {
  members: [],
  status: "idle",
  error: null,
};

export const getMembers = createAsyncThunk("members/getMembers", async (search = "") => {
  const response = await privateService.get(`${URLs.member}${search}`);
  return response.data;
});

const membersSlice = createSlice({
  name: "members",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getMembers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        state.status = "success";
        state.members = action.payload.map((el) => {
          return {
            id: el.id,
            name: el.name,
            image: el.image,
          };
        });
      })
      .addCase(getMembers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default membersSlice.reducer;
