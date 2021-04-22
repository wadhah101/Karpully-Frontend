import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickAway } from 'react-use'
import { closePortal } from '../../utils/redux/slices/appSlice'
import { CoreState } from '../../utils/redux/store'
import { AppPortals, PORTALS_WITH_DATA } from './Portals.data'
import { Transition } from '@headlessui/react'

interface IPortalManagerProps {}

// TODO code spliting
const PortalController: React.FC<IPortalManagerProps> = () => {
  const portal = useSelector<CoreState, { current: AppPortals; show: boolean }>(
    (state) => state.app.portal
  )
  const dispatch = useDispatch()
  const ref = useRef(null)
  useClickAway(ref, () => {
    dispatch(closePortal())
  })

  if (portal.current === null) return null
  const Comp = PORTALS_WITH_DATA.find((e) => e[0] === portal.current)[1]()

  return (
    <Transition show={portal.show}>
      <div className="fixed top-0 left-0 z-40 grid w-screen h-screen bg-black bg-opacity-40 place-items-center ">
        <Transition.Child
          enter="transition-all ease-in-out transform duration-300"
          enterFrom="scale-90 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition-all ease-in-out transform duration-300"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-90 opacity-0"
        >
          {/* TODO add changing animation */}
          <div ref={ref} className="bg-transparent">
            <Comp />
          </div>
        </Transition.Child>
      </div>
    </Transition>
  )
}

export default PortalController
