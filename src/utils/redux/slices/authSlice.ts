import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../graphql/generated-types'

export type AuthState = {
  user: Partial<User>
  accessToken: string
  refreshToken: string
  signup: {
    email: string
  }
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  signup: {
    email: null,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction: (
      state,
      {
        payload,
      }: PayloadAction<{
        refreshToken: string
        accessToken: string
        user: Partial<User>
      }>
    ) => {
      state.user = payload.user
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },
    refreshTokenAction: (
      state,
      {
        payload,
      }: PayloadAction<{
        refreshToken: string
        accessToken: string
        user: Partial<User>
      }>
    ) => {
      state.user = payload.user
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    },

    logout: (state) => {
      state.user = null
      state.accessToken = null
      state.refreshToken = null
    },

    setSignUpEmail: (state, { payload }: PayloadAction<string>) => {
      state.signup = { email: payload }
    },
  },
})

export const {
  loginAction,
  logout,
  setSignUpEmail,
  refreshTokenAction,
} = authSlice.actions

export default authSlice.reducer
