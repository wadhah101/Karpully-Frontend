import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const outerProfile: NextPage = () => <div>Enter</div>;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: false,
});

export default outerProfile;
