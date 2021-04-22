import { GetStaticProps, NextPage } from 'next'

const about: NextPage = () => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default about
