import { configureStore } from "@reduxjs/toolkit";
import activitiesSlice from "./states/activitiesSlice";
import membersSlice from "./states/membersSlice";
import userSliceReducer from "./states/user";
import slidesSliceReducer from "./states/slides";
import categoriesSlice from "./states/categoriesSlice";
import usersSlice from "./states/usersSlice";

export default configureStore({
  reducer: {
    activity: activitiesSlice,
    user: userSliceReducer,
    slides: slidesSliceReducer,
    member: membersSlice,
    category: categoriesSlice,
    users: usersSlice,
  },
});
