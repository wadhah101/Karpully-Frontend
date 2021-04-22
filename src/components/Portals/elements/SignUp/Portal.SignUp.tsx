import React from 'react'
import { useDispatch } from 'react-redux'

import { XIcon } from '@heroicons/react/outline'
import SignUpPortalForm from './Portal.SignUp.Form'
import {
  closePortal,
  openPortal,
} from '../../../../utils/redux/slices/appSlice'

interface IloginProps {}

const LoginPortal: React.FC<IloginProps> = () => {
  const dispatch = useDispatch()
  return (
    <div className="relative w-[30rem] bg-white rounded">
      <span
        onClick={() => dispatch(closePortal())}
        className="absolute block text-black text-opacity-50 cursor-pointer top-6 left-6 "
      >
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </span>
      <div className="flex flex-col items-center p-6">
        <h2 className="text-4xl font-extrabold text-black text-opacity-80">
          Join Karpully
        </h2>
        <h3 className="text-lg text-black text-opacity-50">
          Sign up to start your journey{' '}
        </h3>
        <div className="w-full mt-6 ">
          <SignUpPortalForm />
        </div>
      </div>

      <hr />

      <div className="flex flex-col items-center p-6">
        <p className="text-black text-opacity-80">
          Already registered ?&nbsp;
          <span
            onClick={() => dispatch(openPortal('login'))}
            className="font-semibold text-green-500 cursor-pointer "
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginPortal
