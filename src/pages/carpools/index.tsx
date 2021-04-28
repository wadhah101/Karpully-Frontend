import { GetStaticProps, NextPage } from 'next'
import * as Carpool from '@comp/pages/Carpools/exports'

const carpools: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="py-8 c-container ">
        <Carpool.Feed />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default carpools
