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
    // make: () => {},
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // reset: (state) => {
    //   state.value = 0
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { login, logout } = authSlice.actions

// export const incrementAsync = (amount: number) => (
//   dispatch: Dispatch
// ): void => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export default authSlice.reducer
