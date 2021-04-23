import { GetStaticProps, NextPage } from 'next'

const notificationsPage: NextPage = () => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default notificationsPage
