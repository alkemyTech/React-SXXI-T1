import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, persistLocalStorage } from "utilities/localStorage.util";

const { REACT_APP_USER_TOKEN: USERTOKEN } = process.env;

const initialUserState = {
  loadingUser: false,
  user: { role: { type: undefined } },
  ut: undefined,
  error: false,
};

const userPersist = getLocalStorage(USERTOKEN);

export const userSlice = createSlice({
  name: "user",
  initialState: userPersist ? { ...initialUserState, user: userPersist.user, ut: userPersist.ut } : initialUserState,

  reducers: {
    userRequest: (state, action) => ({ ...state, loadingUser: true }),

    userSuccess: (state, action) => {
      const dataToPersist = {
        user: {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          name: action.payload.name,
          image: action.payload.image,
        },
        ut: action.payload.userToken,
      };

      persistLocalStorage(USERTOKEN, dataToPersist);

      return {
        ...initialUserState,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          name: action.payload.name,
          image: action.payload.image,
        },
        ut: action.payload.token,
      };
    },

    userFailure: (state, action) => ({ ...state, loadingUser: false, error: true }),

    userResetNotification: (state, action) => ({ ...state, loadingUser: false, error: false }),

    userReset: () => {
      return initialUserState;
    },
  },
});

export const { userRequest, userSuccess, userFailure, userReset, userResetNotification } = userSlice.actions;

export default userSlice.reducer;
