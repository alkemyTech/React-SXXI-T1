import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage, persistLocalStorage, clearLocalStorage } from "utilities/localStorage.util"

const initialUserState = {
  loadingUser: false,
  user: { role: { type: undefined } },
  ut: undefined,
  error: false,
}

const userPersist = getLocalStorage("USERPERSIST")

export const userSlice = createSlice({
  name: "user",
  initialState: userPersist ? { ...initialUserState, user: userPersist.user, ut: userPersist.ut } : initialUserState,

  reducers: {
    userRequest: (state, action) => ({ ...state, loadingUser: true }),

    userSuccess: (state, action) => {
      const dataToPersist = {
        user: { id: action.payload.id, email: action.payload.email, role: action.payload.role, name: action.payload.name },
        ut: action.payload.userToken,
      }

      persistLocalStorage("USERPERSIST", dataToPersist)

      return {
        ...initialUserState,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          name: action.payload.name,
        },
        ut: action.payload.token,
      }
    },

    userFailure: (state, action) => ({ ...state, loadingUser: false, error: true }),

    userResetNotification: (state, action) => ({ ...state, loadingUser: false, error: false }),

    userReset: () => {
      clearLocalStorage("USERPERSIST")
      return initialUserState
    },
  },
})

export const { userRequest, userSuccess, userFailure, userReset, userResetNotification } = userSlice.actions

export default userSlice.reducer
