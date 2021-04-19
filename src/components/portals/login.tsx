import React from 'react'
import { useDispatch } from 'react-redux'
import { closePortal } from '../../utils/redux/slices/appSlice'

interface IloginProps {}

const LoginPortal: React.FC<IloginProps> = () => {
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch(closePortal())}
      className="overflow-hidden w-[35rem] h-[40rem] bg-white rounded"
    ></div>
  )
}

export default LoginPortal
