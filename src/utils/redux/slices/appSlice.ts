import { AppPortals } from './../../../components/portals/PortalManager'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CoreState } from '../store'

export type AppState = {
  portal: AppPortals
}

const initialState: AppState = {
  portal: null,
}

const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openPortal: (state, action: PayloadAction<AppPortals>) => {
      state.portal = action.payload
    },
    closePortal: (state) => {
      state.portal = null
    },
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

export const { openPortal, closePortal } = counterSlice.actions

export default counterSlice.reducer
