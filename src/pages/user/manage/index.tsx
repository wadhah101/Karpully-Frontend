import { GetStaticProps, NextPage } from 'next'

const manage: NextPage = () => {
  return <div>Enter</div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default manage