import { configureStore } from "@reduxjs/toolkit";
import activitiesSlice from "./states/activitiesSlice";
import membersSlice from "./states/membersSlice";
import userSliceReducer from "./states/user";
import slidesSliceReducer from "./states/slides";
import categoriesSlice from "./states/categoriesSlice";
import newsSlice from "./states/newsSlice";

export default configureStore({
  reducer: {
    activity: activitiesSlice,
    user: userSliceReducer,
    slides: slidesSliceReducer,
    member: membersSlice,
    category: categoriesSlice,
    news: newsSlice
  },
});
