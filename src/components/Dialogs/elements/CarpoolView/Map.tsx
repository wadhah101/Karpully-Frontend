import * as React from 'react';

import * as Maps from '@comp/Map/exports';
import { Carpool } from '@graphql/generated-types';

interface ICarpoolMapViewProps {
  data: Partial<Carpool>;
}

const CarpoolMapView: React.FunctionComponent<ICarpoolMapViewProps> = ({ data }) => {
  const { lat, lon } = data.destinationLocation;
  return (
    <div className="h-[40rem]">
      <Maps.DemoMap className="h-[40rem]" />
      {lat}
      {lon}
    </div>
  );
};

export default CarpoolMapView;
