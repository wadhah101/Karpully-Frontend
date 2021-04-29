import { GetStaticProps, NextPage } from 'next'

const searchPage: NextPage = () => {
  return <div className="min-h-screen bg-gray-50 "></div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default searchPage
