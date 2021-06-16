import * as React from 'react';

import { Carpool } from '@graphql/generated-types';
import { GlobalState } from '@utils/redux/store';
import { useSelector } from 'react-redux';

import CarpoolViewStateless from './stateless';

const CarpoolViewDialog: React.FC = () => {
  const currentCarpool = useSelector<GlobalState, Partial<Carpool>>(
    (state) => state.carpool.current,
  );

  // god forgive me
  // must test if carpool has all related fields
  // TODO write better logic

  return currentCarpool ? <CarpoolViewStateless data={currentCarpool} /> : null;
};

export default CarpoolViewDialog;
