import React from 'react'
import { BaseDiagleProps } from '../../data'
import MapSearchDialogForm from './Form'
import SearchDialogMap from './Map'

const MapSearchDialog: React.FC<BaseDiagleProps> = () => {
  return (
    <div className="w-[80rem] bg-white overflow-hidden rounded">
      <div className="grid md:grid-cols-12">
        <div className="flex flex-col p-6 md:col-span-5">
          <MapSearchDialogForm onChange={() => null} />
        </div>

        <div className="bg-red-100 md:col-span-7 ">
          <SearchDialogMap />
        </div>
      </div>
    </div>
  )
}

export default MapSearchDialog
