import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "./states/membersSlice";
import userSliceReducer from "./states/user";
import slidesSliceReducer from "./states/slides";
import categoriesSlice from "./states/categoriesSlice";
import usersSlice from "./states/usersSlice";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    slides: slidesSliceReducer,
    member: membersSlice,
    category: categoriesSlice,
    users: usersSlice,
  },
});
