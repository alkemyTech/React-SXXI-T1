import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "./states/membersSlice";
import userSliceReducer from "./states/user";
import categoriesSlice from "./states/categoriesSlice";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    member: membersSlice,
    category: categoriesSlice,
  },
});
