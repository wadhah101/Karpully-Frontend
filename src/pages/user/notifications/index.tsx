import { GetStaticProps, NextPage } from 'next';

const notificationsPage: NextPage = () => <div />;

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default notificationsPage;
