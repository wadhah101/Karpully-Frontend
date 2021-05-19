import { GetStaticProps, NextPage } from 'next';

const reset: NextPage = () => <div>Enter</div>;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default reset;
