import { GetStaticProps, NextPage } from 'next';

const arrangePage: NextPage = () => <div className="min-h-screen" />;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default arrangePage;
