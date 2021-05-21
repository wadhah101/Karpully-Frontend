import React from 'react';

import { CashIcon, ChatIcon, CollectionIcon } from '@heroicons/react/outline';

interface FeatureElement {
  Icon: any;
  title: string;
  description: string;
}

const BLOCKS: FeatureElement[] = [
  { Icon: CollectionIcon, title: 'Browse', description: 'dkdk' },
  { Icon: ChatIcon, title: 'Communicate', description: 'dkdkd' },
  { Icon: CashIcon, title: 'Pay With Ease', description: 'kdkd' },
];

const HomeFeatures: React.FC = () => (
  <div className=" hover:">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-br from-kpink-700 to-kpink-500">
        The Service You Deserve.
      </h2>
    </div>
    <div className="grid mt-8 md:mt-24 md:grid-cols-3 gap-y-5 gap-x-36">
      {BLOCKS.map((e) => (
        <div className="" key={e.title}>
          <div className="flex flex-col items-center text-kpink-600">
            <div className="mb-2">
              <e.Icon className="w-8 h-8 " />
            </div>
            <h3 className="text-lg font-extrabold tracking-wider text-center uppercase md:text-xl ">
              {e.title}
            </h3>
          </div>
          <p className="mt-2 text-lg text-black md:mt-4 text-opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempora molestiae
            reiciendis debitis in, possimus suscipit ipsam laborum. Impedit aut sed sunt error iure?
            Animi in minima reprehenderit corrupti consequuntur.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default HomeFeatures;
