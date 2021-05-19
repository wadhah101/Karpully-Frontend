import * as Carpool from '@comp/pages/Carpools/exports';
import { GetStaticProps, NextPage } from 'next';

const carpoolsPage: NextPage = () => (
  <div className="min-h-screen bg-gray-50 ">
    <div className="py-8 c-container ">
      <Carpool.Feed />
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default carpoolsPage;
