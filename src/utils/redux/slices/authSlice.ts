import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../graphql/generated-types'

type AuthSlice = {
  user: User
  token: string
}

const initialState: AuthSlice = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },

    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
