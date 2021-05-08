import * as React from 'react'
import { Carpool } from 'src/graphql/generated-types'
import CarpoolFeedElement from './Element'

interface ICarpoolFeedListProps {
  carpools: Partial<Carpool>[]
}

const CarpoolFeedList: React.FC<ICarpoolFeedListProps> = ({ carpools }) => {
  if (!carpools) return null
  return (
    <div className="grid gap-4">
      {carpools.map((e) => (
        <CarpoolFeedElement key={e.id} carpool={e} />
      ))}
    </div>
  )
}

export default CarpoolFeedList
