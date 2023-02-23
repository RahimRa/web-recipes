import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
  isAuth: false,
  serverError: null,
}


const userSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      state.isAuth = false
    },
    setError(state, action) {
      state.serverError = action.payload
    }
  },
})

export const { setUser, removeUser, setError } = userSlise.actions
export default userSlise.reducer
