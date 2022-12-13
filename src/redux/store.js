import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/user";
import categoriesSlice from "./states/categoriesSlice";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    category: categoriesSlice,
  },
});
