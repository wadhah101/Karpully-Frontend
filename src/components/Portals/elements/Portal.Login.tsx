import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../../graphql/generated-types'
import { login } from '../../../utils/redux/slices/authSlice'

interface IloginProps {}

const LoginPortal: React.FC<IloginProps> = () => {
  const dispatch = useDispatch()
  const [loginMutation, result] = useLoginMutation({
    variables: { username: 'Ahmed', password: 'ahmed' },
  })

  // TODO isolate to thunk
  useEffect(() => {
    if (result.called && !result.loading && !result.error)
      dispatch(login({ token: result.data.login.access_token, user: null }))
    return () => null
  }, [result])

  return (
    <div className=" flex-col text-white flex items-center justify-center w-[35rem]  bg-white rounded">
      <button
        onClick={() => loginMutation()}
        className="p-3 m-4 shadow bg-kpink-500 "
      >
        login
      </button>
    </div>
  )
}

export default LoginPortal
