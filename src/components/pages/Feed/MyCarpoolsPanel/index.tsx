/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

interface IMyCarpoolsFeedProps {}

const MyCarpoolsFeed: React.FunctionComponent<IMyCarpoolsFeedProps> = () => {
  const [state, setState] = React.useState(0);
  return (
    <div className="h-32 p-3 bg-white border rounded shadow ">
      <h2 className="text-xl font-extrabold text-transparent md:text-2xl bg-clip-text bg-gradient-to-br from-kgreen-700 to-kgreen-500">
        My Carpools
      </h2>
    </div>
  );
};

export default MyCarpoolsFeed;
