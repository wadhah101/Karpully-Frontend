import * as React from 'react';

import HomeFaqElement from './Element';

const data: { question: string; answer: string; id: string }[] = [].map((e, ind) => ({
  ...e,
  id: ind,
}));

const HomeFaq: React.FC = () => (
  <div>
    {data.map((e) => (
      <HomeFaqElement key={e.id} data={e} />
    ))}
  </div>
);

export default HomeFaq;
