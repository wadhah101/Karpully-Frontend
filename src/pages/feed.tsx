import { GetStaticProps, NextPage } from 'next'

const feed: NextPage = () => {
  return <div className="min-h-screen"></div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default feed
