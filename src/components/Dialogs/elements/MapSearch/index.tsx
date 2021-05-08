import React from 'react'
import { BaseDiagleProps } from '../../data'
import MapSearchDialogForm from './Form'

const MapSearchDialog: React.FC<BaseDiagleProps> = () => {
  return (
    <div className="w-[50rem] bg-white rounded">
      <div className="flex flex-col p-6">
        <MapSearchDialogForm onChange={() => null} />
      </div>

      <hr />
      <div className="p-6 min-h-[15rem] max-h-[33rem] overflow-auto text-left"></div>
    </div>
  )
}

export default MapSearchDialog
