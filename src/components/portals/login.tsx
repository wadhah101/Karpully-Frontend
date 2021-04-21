import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  useCarpoolsLazyQuery,
  useLoginMutation,
} from '../../graphql/generated-types'
import { login } from '../../utils/redux/slices/authSlice'

interface IloginProps {}

const LoginPortal: React.FC<IloginProps> = () => {
  const dispatch = useDispatch()
  const [loginMutation, result] = useLoginMutation({
    variables: { username: 'Ahmed', password: 'ahmed' },
  })

  const [carpoolsLazyQuery, carpoolsResult] = useCarpoolsLazyQuery({
    variables: { page: 1, limit: 8 },
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

      <button
        onClick={() => carpoolsLazyQuery()}
        className="p-3 m-4 shadow bg-kgreen-500 "
      >
        fetchSome
      </button>
      <p className="text-black">
        {' '}
        {JSON.stringify(carpoolsResult.data, null, 2)}{' '}
      </p>
    </div>
  )
}

export default LoginPortal
