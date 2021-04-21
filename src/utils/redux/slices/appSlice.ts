import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppPortals } from '../../../components/portals/Portals.data'
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
  },
})

export const selectCount = (state: CoreState): number => state.counter.value

export const { openPortal, closePortal } = counterSlice.actions

export default counterSlice.reducer
