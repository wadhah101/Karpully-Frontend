import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCarpoolsQuery } from 'src/graphql/generated-types'
import CarpoolFeedList from './Components/List'
import CarpoolFeedLoading from './Components/ElementLoading'

interface ICarpoolsFeedControllerProps {}

const pergPage = 15

const CarpoolsFeedController: React.FC<ICarpoolsFeedControllerProps> = () => {
  const { data, fetchMore } = useCarpoolsQuery({
    variables: { limit: pergPage, page: 1 },
  })

  type CarpoolArrayPartial = typeof data.carpools.items

  const [pagingData, setPagingData] = React.useState<{
    hasMore: boolean
    items: CarpoolArrayPartial
  }>({
    items: [],
    hasMore: true,
  })

  React.useEffect(() => {
    if (!data) return () => null
    const newData = pagingData.items.concat(data.carpools.items)
    setPagingData({ hasMore: true, items: newData })
    return () => null
  }, [data])

  const fetchMoreData = () => {
    const pageNum = Math.floor(pagingData.items.length / pergPage)
    fetchMore({ variables: { page: pageNum + 1, limit: pergPage } }).then(
      (e) => {
        const { items } = e.data.carpools
        const newData = pagingData.items.concat(items)
        setPagingData({ hasMore: true, items: newData })
      }
    )
  }

  return (
    <div className="bg-white shadow md:p-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
      tenetur quisquam quam, nisi incidunt similique, a voluptatem molestiae
      eligendi labore sequi libero ipsam? Exercitationem incidunt inventore
      reiciendis fuga fugit aspernatur.
      <div className="mt-3">
        <InfiniteScroll
          dataLength={pagingData.items.length}
          next={fetchMoreData}
          hasMore={pagingData.items.length < 100}
          loader={<CarpoolFeedLoading />}
        >
          {data && <CarpoolFeedList carpools={pagingData.items as any} />}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default CarpoolsFeedController
