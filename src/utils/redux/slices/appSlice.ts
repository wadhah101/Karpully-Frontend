import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppPortals } from '../../../components/Portals/Portals.data'
import { CoreState } from '../store'

export type AppState = {
  portal: {
    current: AppPortals
    show: boolean
  }
}

const initialState: AppState = {
  portal: { current: null, show: false },
}

const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openPortal: (state, action: PayloadAction<AppPortals>) => {
      state.portal = { current: action.payload, show: true }
    },
    closePortal: (state) => {
      state.portal.show = false
    },
  },
})

export const selectCount = (state: CoreState): number => state.counter.value

export const { openPortal, closePortal } = counterSlice.actions

export default counterSlice.reducer
