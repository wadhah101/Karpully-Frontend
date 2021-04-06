import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CoreState } from '../store'

type AuthSlice = {
  user: any
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
    //   TODO login with redux thunk
    login: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },

    //   TODO logout with redux thunk
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

export const selectCount = (state: CoreState): number => state.counter.value

export const { login, logout } = authSlice.actions

// export const incrementAsync = (amount: number) => (
//   dispatch: Dispatch
// ): void => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export default authSlice.reducer
