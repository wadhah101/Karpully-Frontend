import { Carpool } from '@graphql/generated-types';
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CarpoolsState {
  current: Partial<Carpool>;
}

const initialState: CarpoolsState = {
  current: null,
};

const carpoolSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentCarpool: (state, action: PayloadAction<Partial<Carpool>>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentCarpool } = carpoolSlice.actions;

export default carpoolSlice.reducer;
