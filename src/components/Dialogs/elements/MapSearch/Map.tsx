import * as React from 'react'
import * as Maps from '@comp/Map/exports'

const SearchDialogMap: React.FC = () => {
  return (
    <div className="h-[40rem]">
      <Maps.DemoMap className="h-[40rem]" />
    </div>
  )
}

export default SearchDialogMap
