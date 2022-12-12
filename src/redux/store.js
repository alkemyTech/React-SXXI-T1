import { configureStore } from "@reduxjs/toolkit";
import membersSlice from "./states/membersSlice";
import userSliceReducer from "./states/user";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    member: membersSlice,
  },
});
