import * as React from 'react';

import HomeFaqElement from './Element';

const ex = {
  question: 'Lorem ipsum dolor sit, amet consectetur adipisicing ?',
  answer:
    'Lorem ipsum dolor sit  at quaerat odio cumque iusto dicta eveniet eius asperiores maiores voluptate culpa, amet consectetur adipisicing elit. Dolorum similique est quod, at quaerat odio cumque iusto dicta eveniet eius asperiores maiores voluptate culpa fugiat quibusdam enim rerum exercitationem quidem.',
};

const data: { question: string; answer: string; id: number }[] = new Array(6)
  .fill(ex)
  .map((e, ind) => ({
    ...e,
    id: ind,
  }));

const HomeFaq: React.FC = () => (
  <div>
    <h2 className="mb-6 text-3xl font-extrabold text-center text-transparent md:text-6xl md:mb-14 bg-clip-text bg-gradient-to-br from-kgreen-700 to-kgreen-500">
      Frequently Asked Questions.
    </h2>
    <div className="">
      {data.map((e) => (
        <HomeFaqElement key={e.id} data={e} />
      ))}
    </div>
  </div>
);

export default HomeFaq;
