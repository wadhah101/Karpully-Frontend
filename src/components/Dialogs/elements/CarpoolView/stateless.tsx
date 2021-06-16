import * as React from 'react';

import { Carpool } from '@graphql/generated-types';

import CarpoolMapView from './Map';

interface ICarpoolViewStatelessProps {
  data: Partial<Carpool>;
}

const CarpoolViewStateless: React.FC<ICarpoolViewStatelessProps> = ({ data }) => (
  <div className="w-[80rem] bg-white overflow-hidden rounded">
    <div className="grid md:grid-cols-12">
      <div className="flex flex-col p-6 md:col-span-7">{JSON.stringify(data, null, 2)}</div>
      <div className="bg-red-100 md:col-span-5 ">
        <CarpoolMapView data={data} />
      </div>
    </div>
  </div>
);

export default CarpoolViewStateless;
