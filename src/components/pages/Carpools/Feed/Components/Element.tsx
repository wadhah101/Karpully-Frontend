import * as React from 'react'
import { Carpool } from 'src/graphql/generated-types'

interface ICarpoolFeedElementProps {
  carpool: Partial<Carpool>
}

const CarpoolFeedElement: React.FunctionComponent<ICarpoolFeedElementProps> = ({
  carpool,
}) => {
  return (
    <div className="p-3 rounded bg-kpurple-100 text-kpurple-800 ">
      {JSON.stringify(carpool, null, 2)}
    </div>
  )
}

export default CarpoolFeedElement
