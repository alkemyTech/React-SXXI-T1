import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage, persistLocalStorage, clearLocalStorage } from "utilities/localStorage.util"

const initialUserState = {
  loadingUser: false,
  user: { role: undefined },
  userToken: undefined,
}

export const userSlice = createSlice({
  name: "user",
  initialState: getLocalStorage("USERPERSIST")
    ? { ...initialUserState, user: JSON.parse(getLocalStorage("USERPERSIST")), userToken: JSON.parse(getLocalStorage("USERPERSIST")).token }
    : initialUserState,

  reducers: {
    userRequest: (state, action) => ({ ...state, loadingUser: true }),
    userSuccess: (state, action) => {
      const dataToPersist = {
        email: action.payload.user.email,
        role: action.payload.user.role_id,
        name: action.payload.user.userName,
        userToken: action.payload.token,
      }

      persistLocalStorage("USERPERSIST", dataToPersist)

      return {
        ...initialUserState,
        user: {
          email: action.payload.user.email,
          role: action.payload.user.role_id,
          name: action.payload.user.userName,
        },
        userToken: action.payload.token,
      }
    },
    userFailure: (state, action) => ({ ...state, loadingUser: false }),
    userReset: () => {
      clearLocalStorage("USERPERSIST")
      return initialUserState
    },
  },
})

export const { userRequest, userSuccess, userFailure, userReset } = userSlice.actions

export default userSlice.reducer
