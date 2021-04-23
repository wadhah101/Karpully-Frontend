import React from 'react'
import { useDispatch } from 'react-redux'
import {
  closePortal,
  openPortal,
} from '../../../../utils/redux/slices/appSlice'
import { XIcon } from '@heroicons/react/outline'
import LoginDialogForm from './Dialog.Login.Form'

interface IloginProps {}

const LoginDialog: React.FC<IloginProps> = () => {
  const dispatch = useDispatch()
  return (
    <div className="relative w-[30rem]  bg-white rounded">
      <span
        onClick={() => dispatch(closePortal())}
        className="absolute block text-black text-opacity-50 cursor-pointer top-6 left-6 "
      >
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </span>
      <div className="flex flex-col items-center p-6">
        <h2 className="text-4xl font-extrabold text-black text-opacity-80">
          Hello!
        </h2>
        <h3 className="text-lg text-black text-opacity-50">
          Sign into your account here.
        </h3>
        <div className="w-full mt-6 ">
          <LoginDialogForm />
        </div>
      </div>

      <hr />

      <div className="flex flex-col items-center p-6">
        <p className="text-black text-opacity-80">
          Forgot password ?&nbsp;
          <span
            onClick={() => dispatch(openPortal('reset'))}
            className="font-semibold text-green-500 cursor-pointer"
          >
            Reset
          </span>
        </p>
        <p className="text-black text-opacity-80">
          Don&apos;t have an account ?&nbsp;
          <span
            onClick={() => dispatch(openPortal('signup'))}
            className="font-semibold text-green-500 cursor-pointer "
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginDialog
