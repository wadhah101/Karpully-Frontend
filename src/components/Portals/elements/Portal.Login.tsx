/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../../graphql/generated-types'
import { closePortal } from '../../../utils/redux/slices/appSlice'
import { login } from '../../../utils/redux/slices/authSlice'
import { XIcon } from '@heroicons/react/outline'

interface IloginProps {}

const Input: React.FC<React.InputHTMLAttributes<any>> = ({
  className,
  children,
  ...props
}) => (
  <input
    className={clsx('flex w-full p-3 rounded ring ', className)}
    {...props}
  >
    {children}
  </input>
)

const LoginPortalForm: React.FC = () => {
  const dispatch = useDispatch()
  const [loginMutation, result] = useLoginMutation({
    variables: { username: 'Ahmed', password: 'ahmed' },
  })

  // TODO isolate to thunk
  useEffect(() => {
    if (result.called && !result.loading && !result.error) {
      const {
        data: {
          login: { access_token, user },
        },
      } = result
      dispatch(login({ token: access_token, user: user }))
      dispatch(closePortal())
    }
    return () => null
  }, [result])

  return (
    <form className="grid w-full gap-6 mt-6 ">
      <Input placeholder="email" />
      <Input placeholder="password" />
      <button className="grid px-8 py-2.5 text-white bg-opacity-50 rounded bg-gradient-to-r from-kgreen-600  font-bold place-items-center to-kgreen-500 ">
        Login
      </button>
    </form>
  )
}

const LoginPortal: React.FC<IloginProps> = () => {
  return (
    <div className="relative w-[30rem]  bg-white rounded">
      <span className="absolute block text-black text-opacity-50 cursor-pointer top-6 left-6 ">
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </span>
      <div className="flex flex-col items-center p-6">
        <h2 className="text-4xl font-extrabold text-black text-opacity-80">
          Hello!
        </h2>
        <h3 className="text-lg text-black text-opacity-50">
          Sign into your account here.
        </h3>
        <LoginPortalForm />
      </div>

      <hr />

      <div className="flex flex-col items-center p-6">
        <p className="text-sm text-black text-opacity-80">
          Forgot password?{' '}
          <span className="font-semibold text-green-500">Reset</span>{' '}
        </p>
        <p className="text-sm text-black text-opacity-80 ">
          Don't have an account?{' '}
          <span className="font-semibold text-green-500 "> Sign up </span>
        </p>
      </div>
    </div>
  )
}

export default LoginPortal
