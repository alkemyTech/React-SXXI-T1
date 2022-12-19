import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { whatIs } from "utilities/parseDate";

const initialState = {
  activities: [],
  status: "idle",
  error: null,
};

export const getActivities = createAsyncThunk("activities/getActivities", async (search = "") => {
  const response = await privateService.get(`${URLs.activity}${search}`);
  return response.data;
});

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getActivities.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.status = "success";
        state.activities = action.payload.map((el) => {
          return {
            id: el.id,
            name: el.name,
            image: el.image,
            createdAt: whatIs("isString", el.created_at, "splice", "created_at"),
          };
        });
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default activitiesSlice.reducer;
