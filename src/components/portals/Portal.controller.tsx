import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickAway } from 'react-use'
import { closePortal } from '../../utils/redux/slices/appSlice'
import { CoreState } from '../../utils/redux/store'
import { AppPortals, PORTALS_WITH_DATA } from './Portals.data'

interface IPortalManagerProps {}

const PortalController: React.FC<IPortalManagerProps> = () => {
  const portal = useSelector<CoreState, AppPortals>((state) => state.app.portal)
  const dispatch = useDispatch()
  const ref = useRef(null)
  useClickAway(ref, () => {
    dispatch(closePortal())
  })

  if (portal === null) return null
  const Comp = PORTALS_WITH_DATA.find((e) => e[0] === portal)[1]

  return (
    <div className="fixed top-0 left-0 grid w-screen h-screen bg-black bg-opacity-50 place-items-center ">
      <div ref={ref} className="bg-transparent ">
        <Comp />
      </div>
    </div>
  )
}

export default PortalController
