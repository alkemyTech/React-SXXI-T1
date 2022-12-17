import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import privateService from "Services/privateApiService";
import { personalSlides } from "utilities/slides/slides.util";

const initialSlidesState = {
  loadSlides: false,
  slides: [],
  slidesToRender: [],
  successRequest: false,
  error: false,
};

export const getSlides = createAsyncThunk("slides/getSlides", async (url) => {
  const response = await privateService.get(url);
  if (!response || !response.success) throw new Error(response.message);

  const adaptingSlides = personalSlides(response.data);
  return adaptingSlides;
});

export const slidesSlice = createSlice({
  name: "slides",
  initialState: { ...initialSlidesState },
  reducers: {
    slidesRequest: (state, action) => ({
      ...state,
      loadSlides: true,
    }),

    slidesFailure: (state, action) => ({ ...state, loadSlides: false, error: true, successRequest: false }),

    slidesResetNotification: (state, action) => ({ ...state, loadSlides: false, error: false, successRequest: false }),
  },
  extraReducers(builder) {
    builder
      .addCase(getSlides.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSlides.fulfilled, (state, action) => ({
        ...state,
        status: "success",
        slides: !!state.slides.length ? state.slides : action.payload,
        slidesToRender: action.payload,
        successRequest: true,
        error: false,
      }))
      .addCase(getSlides.rejected, (state, action) => ({
        ...state,
        status: "error",
        error: action.error.message,
      }));
  },
});

export const { slidesRequest, slidesResetNotification } = slidesSlice.actions;

export default slidesSlice.reducer;
