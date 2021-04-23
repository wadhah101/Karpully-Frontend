import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppPortals } from '../../../components/Portals/Dialogs.data'

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

export const { openPortal, closePortal } = counterSlice.actions

export default counterSlice.reducer
