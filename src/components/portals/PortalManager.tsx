import React from 'react'
import LoginPortal from './login'
import SignupPortal from './signup'

export type AppPortals = 'login' | 'signup'

interface IPortalManagerProps {
  portal: AppPortals
}

const data: [AppPortals, React.FC][] = [
  ['login', LoginPortal],
  ['signup', SignupPortal],
]
const PortalManager: React.FC<IPortalManagerProps> = ({ portal }) => {
  if (portal === null) return null
  const Comp = data.find((e) => e[0] === portal)[1]
  return (
    <div className="fixed top-0 left-0 grid w-screen h-screen bg-black bg-opacity-50 place-items-center ">
      <Comp />
    </div>
  )
}

export default PortalManager
