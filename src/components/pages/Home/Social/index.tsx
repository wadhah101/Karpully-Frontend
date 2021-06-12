/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import clsx from 'clsx';

import HomeSocialElement from './element';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a = 'md:col-span-3 md:col-span-4 md:col-span-5 ';

const data = [5, 3, 4, 4, 5, 3].map((e) => `md:col-span-${e}`);

const HomeSocial: React.FC = () => (
  <div>
    <h2 className="text-4xl font-extrabold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-br from-kyellow-700 to-kyellow-500">
      Experiences.
    </h2>

    <p className="mt-4 text-lg text-center text-black md:mt-8 text-opacity-80 ">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus deserunt architecto n{' '}
    </p>
    <div className="mt-4 md:mt-8">
      <div className="grid gap-4 md:grid-cols-12 md:gap-6">
        {data.slice(0, 3).map((e, id) => (
          <div key={id} className={clsx(e)}>
            <HomeSocialElement data={e} />
          </div>
        ))}
      </div>

      <div className="hidden gap-4 mt-4 md:mt-6 md:grid-cols-12 md:gap-6 md:grid">
        {data.slice(3, 6).map((e, id) => (
          <div key={id} className={clsx(e)}>
            <HomeSocialElement data={e} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomeSocial;
