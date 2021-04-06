import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { CoreState } from '../store'

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const selectCount = (state: CoreState): number => state.counter.value

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
} = counterSlice.actions

export const incrementAsync = (amount: number) => (
  dispatch: Dispatch
): void => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export default counterSlice.reducer
