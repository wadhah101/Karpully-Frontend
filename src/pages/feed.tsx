import { GetStaticProps, NextPage } from 'next'
import * as Feed from '@comp/pages/Feed/exports'

const feedPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="py-8 c-container ">
        <Feed.Controller />
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

export default feedPage
