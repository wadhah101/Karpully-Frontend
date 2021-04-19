import { GetStaticProps, NextPage } from 'next'

const security: NextPage = () => {
  return <div>Enter</div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default security
