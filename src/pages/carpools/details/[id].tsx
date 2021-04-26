import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const carpool: NextPage = () => {
  return <div className="min-h-screen"></div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default carpool
