import * as React from 'react';

import { Carpool } from '@graphql/generated-types';
import { ClockIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import dayjs from 'dayjs';

import CarpoolMapView from './Map';

interface ICarpoolViewStatelessProps {
  data: Partial<Carpool>;
}

const CarpoolViewStateless: React.FC<ICarpoolViewStatelessProps> = ({ data }) => {
  const {
    description,
    departureDate,
    nbrOfAvailablePlaces,
    departureLocation,
    destinationLocation,
  } = data;
  const formatedDate = dayjs(departureDate).format('DD/MM/YYYY');
  const formatHour = dayjs(departureDate).format('HH:mm');
  return (
    <div className="w-[80rem] bg-white overflow-hidden rounded">
      <div className="grid md:grid-cols-12">
        <div className="flex flex-col p-6 md:col-span-7">
          <div className="flex items-center ">
            <span className="float-left mr-1 text-black text-opacity-70">
              <LocationMarkerIcon className="w-4 h-4" />
            </span>
            <p>
              Going From : <span className="font-bold">{destinationLocation.display_name}</span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="float-left mr-1 text-black text-opacity-70">
              <LocationMarkerIcon className="w-4 h-4" />
            </span>

            <p>
              Going To : <span className="font-bold"> {departureLocation.display_name} </span>
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
          <div className="text-left">
            Available Places : <span className="font-bold ">{nbrOfAvailablePlaces}</span>
          </div>

          <div className="text-left">
            Description : <span className="font-bold ">{description}</span>
          </div>
        </div>
        <div className="bg-red-100 md:col-span-5 ">
          <CarpoolMapView data={data} />
        </div>
      </div>
    </div>
  );
};

export default CarpoolViewStateless;
