import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../graphql/generated-types'
import { login } from '../../utils/redux/slices/authSlice'

interface IloginProps {}

const LoginPortal: React.FC<IloginProps> = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginMutation, result] = useLoginMutation({
    variables: { username: 'Ahmed', password: 'ahmed' },
  })

  useEffect(() => {
    if (result.called && !result.loading && !result.error)
      dispatch(login({ token: result.data.login.access_token, user: null }))
    return () => null
  }, [result])

  return (
    <div
      onClick={() => loginMutation()}
      className="overflow-hidden w-[35rem] h-[40rem] bg-white rounded"
    ></div>
  )
}

export default LoginPortal
