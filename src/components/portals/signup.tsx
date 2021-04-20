import React from 'react'
import { useDispatch } from 'react-redux'
import { useSignupMutation } from '../../graphql/generated-types'
import { closePortal } from '../../utils/redux/slices/appSlice'

interface IsignupProps {}

const SignupPortal: React.FC<IsignupProps> = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signupMutation, { data, loading, error }] = useSignupMutation()

  return (
    <div
      onClick={() => dispatch(closePortal())}
      className="overflow-hidden w-[35rem] h-[40rem] bg-white rounded"
    ></div>
  )
}

export default SignupPortal
