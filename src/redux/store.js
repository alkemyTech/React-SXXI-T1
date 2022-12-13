import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/user";
import slidesSliceReducer from "./states/slides";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    slides: slidesSliceReducer,
  },
});
