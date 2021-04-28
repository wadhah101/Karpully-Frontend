/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCarpoolsQuery } from 'src/graphql/generated-types'

interface ICarpoolsFeedControllerProps {}

const CarpoolsFeedController: React.FC<ICarpoolsFeedControllerProps> = () => {
  const { data, fetchMore } = useCarpoolsQuery({
    variables: { limit: 8, page: 1 },
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
    const newData = [...pagingData.items, ...data.carpools.items]
    setPagingData({ hasMore: true, items: newData })
    return () => null
  }, [data])

  const fetchMoreData = () => {
    const pageNum = Math.floor(pagingData.items.length / 8)
    console.debug(pageNum)
    fetchMore({ variables: { page: pageNum + 1, limit: 8 } }).then((e) => {
      const { items } = e.data.carpools
      const newData = [...pagingData.items, ...items]
      setPagingData({ hasMore: true, items: newData })
    })
  }

  return (
    <div className="bg-white shadow">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
      tenetur quisquam quam, nisi incidunt similique, a voluptatem molestiae
      eligendi labore sequi libero ipsam? Exercitationem incidunt inventore
      reiciendis fuga fugit aspernatur.
      <InfiniteScroll
        dataLength={pagingData.items.length}
        next={fetchMoreData}
        hasMore={pagingData.items.length < 100}
        loader={<h4>Loading...</h4>}
      >
        {data &&
          pagingData.items.map((e) => (
            <div
              className="p-3 m-3 rounded shadow text-kpurple-800 bg-kpurple-100"
              key={e.id}
            >
              {e.id}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore, earum beatae dolorum iste dolore quas, laudantium, quod
              adipisci ad ratione reprehenderit aut nisi modi quo repellat
              provident recusandae quibusdam amet. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Porro adipisci alias esse voluptas,
              saepe blanditiis ex. Tenetur minima quibusdam in rerum corrupti
              aliquid illo? Placeat pariatur facere quisquam est illo!
            </div>
          ))}
      </InfiniteScroll>
    </div>
  )
}

export default CarpoolsFeedController
