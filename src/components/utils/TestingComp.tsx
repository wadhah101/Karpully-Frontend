import * as React from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import { openDialog } from '@utils/redux/slices/appSlice';
import { useDispatch } from 'react-redux';

const TestingComp: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  dispatch(openDialog(AppPortals.CompleteInfo));
  return null;
};

export default TestingComp;
