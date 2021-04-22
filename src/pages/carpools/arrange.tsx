import { GetStaticProps, NextPage } from 'next'
import { useAuthGuard } from '../../utils/guards/auth.guard'

// TODO guard
const arrage: NextPage = () => {
  useAuthGuard()
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default arrage
