import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppPortals } from '../../../components/Portals/Dialogs.data'

export interface PortalState {
  current: AppPortals
  show: boolean
}

export type AppState = {
  portal: PortalState
}

const initialState: AppState = {
  portal: { current: null, show: false },
}

const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<AppPortals>) => {
      state.portal = { current: action.payload, show: true }
    },
    closeDialog: (state) => {
      state.portal.show = false
    },
  },
})

export const { openDialog, closeDialog } = counterSlice.actions

export default counterSlice.reducer
