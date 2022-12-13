import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/user";
import slidesSliceReducer from "./states/slides";
import categoriesSlice from "./states/categoriesSlice";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    slides: slidesSliceReducer,
    category: categoriesSlice,
  },
});
