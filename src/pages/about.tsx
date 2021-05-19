import { GetStaticProps, NextPage } from 'next';

const about: NextPage = () => <div />;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default about;
