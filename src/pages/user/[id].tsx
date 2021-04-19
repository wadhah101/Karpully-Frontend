import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const outerProfile: NextPage = () => {
  return <div>Enter</div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default outerProfile
