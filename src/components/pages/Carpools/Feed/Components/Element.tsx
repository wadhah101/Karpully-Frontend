/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/solid';
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
  const formatHour = dayjs(departureDate).format('HH:mm');
  return (
    <div className="flex flex-col p-3 transition-shadow border hover:shadow ">
      <div className="flex-grow">
        <div className="flex items-center ">
          <span className="float-left mr-1 text-black text-opacity-70">
            <LocationMarkerIcon className="w-4 h-4" />
          </span>
          <p>
            Going From : <span className="font-bold"> {destinationLocation.address.name}</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="float-left mr-1 text-black text-opacity-70">
            <LocationMarkerIcon className="w-4 h-4" />
          </span>

          <p>
            Going To : <span className="font-bold"> {departureLocation.address.name} </span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="float-left mr-1 text-black text-opacity-70 ">
            <ClockIcon className="w-4 h-4" />
          </span>
          Departing :
          <span className="font-bold">
            {formatedDate} At {formatHour}
          </span>
        </div>
        <div>
          <div>
            Avaible Places : <span className="font-bold ">{nbrOfAvailablePlaces}</span>
          </div>
        </div>
      </div>

      <div className="text-sm font-semibold text-right text-black text-opacity-70 ">
        <p className="cursor-pointer hover:underline"> @{owner.username}</p>
      </div>
    </div>
  );
};
export default CarpoolFeedElement;
