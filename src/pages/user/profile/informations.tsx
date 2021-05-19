import { GetStaticProps, NextPage } from 'next';

const informations: NextPage = () => <div>Enter</div>;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default informations;
