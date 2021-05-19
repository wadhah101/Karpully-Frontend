import React from 'react';

import dynamic from 'next/dynamic';

const DemoMap = dynamic(() => import('./DemoMap'), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export { DemoMap };
