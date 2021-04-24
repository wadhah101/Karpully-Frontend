import React from 'react'
import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { CoreState } from '../../../../utils/redux/store'
import {
  openDialog,
  PortalState,
} from '../../../../utils/redux/slices/appSlice'

const HeaderSearch: React.FC = () => {
  const dispatch = useDispatch()
  const portal = useSelector<CoreState, PortalState>(
    (state) => state.app.portal
  )
  const isShown = portal.show && portal.current === 'search'
  const Comp = isShown ? XIcon : SearchIcon

  return (
    <div onClick={() => dispatch(openDialog('search'))}>
      <Comp className="w-6 h-6 cursor-pointer" />
    </div>
  )
}

export default HeaderSearch
