import { GetStaticProps, NextPage } from 'next';

const searchPage: NextPage = () => <div className="min-h-screen bg-gray-50 " />;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default searchPage;
