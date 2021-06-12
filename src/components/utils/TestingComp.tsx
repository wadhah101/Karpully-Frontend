import * as React from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import { openDialog } from '@utils/redux/slices/appSlice';
import { useDispatch } from 'react-redux';

const TestingComp: React.FunctionComponent = () => {
  return null;
  if (process.env.NODE_ENV === 'production') return null;
  const dispatch = useDispatch();
  dispatch(openDialog(AppPortals.CompleteInfo));
  return null;
};

export default TestingComp;
