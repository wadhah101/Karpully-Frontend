import React from 'react'
import { useDispatch } from 'react-redux'
import { closeDialog } from '../../../../utils/redux/slices/appSlice'
import { XIcon } from '@heroicons/react/outline'
import { Dialog } from '@headlessui/react'
import { BaseDiagleProps } from '../../Dialogs.data'

const SearchDialog: React.FC<BaseDiagleProps> = ({ cancelButtonRef }) => {
  const dispatch = useDispatch()
  return (
    <div className="relative w-[50rem] bg-white rounded">
      <button
        ref={cancelButtonRef}
        onClick={() => dispatch(closeDialog())}
        className="absolute block text-black text-opacity-50 cursor-pointer top-6 left-6 "
      >
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <div className="flex flex-col items-center p-6">
        <Dialog.Title
          as="h2"
          className="text-4xl font-extrabold text-black text-opacity-80"
        >
          Search!
        </Dialog.Title>
        <Dialog.Description
          as="h3"
          className="text-lg text-black text-opacity-50"
        >
          This feature is not yet implimented
        </Dialog.Description>
        <div className="w-full mt-6 ">
          {/* CONTENT GOES HERE */}
          <div></div>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default SearchDialog
