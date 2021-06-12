import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const profilePage: NextPage = () => <div>ProfilePage</div>;

export const getStaticPaths: GetStaticPaths = async () =>
  // todo get user id list
  ({
    paths: ['100', '101', '102', '103'].map((e) => ({ params: { id: e } })),
    fallback: false,
  });
export const getStaticProps: GetStaticProps = async () => ({
  props: {
    data: null,
  },
});

export default profilePage;
