/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import dayjs from 'dayjs';
import { Carpool } from 'src/graphql/generated-types';

interface ICarpoolFeedElementProps {
  carpool: Partial<Carpool>;
}

const CarpoolFeedElement: React.FunctionComponent<ICarpoolFeedElementProps> = ({
  carpool: {
    departureDate,
    nbrOfAvailablePlaces,
    departureLocation,
    hasSmokePermission,
    owner,
    destinationLocation,
  },
}) => {
  const formatedDate = dayjs(departureDate).format('DD/MM/YYYY');
  return (
    <div className="p-3 border ">
      <div>{nbrOfAvailablePlaces}</div>
      <div> {destinationLocation.address.name} </div>
      <div> {departureLocation.address.name} </div>
      <div> owner id {owner.id} </div>
      <div> {formatedDate} </div>
    </div>
  );
};
export default CarpoolFeedElement;
