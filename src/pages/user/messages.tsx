import { GetStaticProps, NextPage } from 'next';

const messages: NextPage = () => <div />;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default messages;
