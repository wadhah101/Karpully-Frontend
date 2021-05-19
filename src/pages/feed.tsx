import * as Feed from '@comp/pages/Feed/exports';
import { GetStaticProps, NextPage } from 'next';

const feedPage: NextPage = () => (
  <div className="min-h-screen bg-gray-100 ">
    <div className="py-8 c-container ">
      <Feed.Controller />
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default feedPage;
