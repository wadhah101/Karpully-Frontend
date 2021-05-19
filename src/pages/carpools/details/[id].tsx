import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const carpool: NextPage = () => <div className="min-h-screen" />;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});
export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default carpool;
