import {
  RefreshTokenDocument,
  RefreshTokenQuery,
  RefreshTokenQueryVariables,
} from './../../graphql/generated-types'
/* eslint-disable no-console */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authLessClient } from '.'
import { login, logout } from '../redux/slices/authSlice'
import { CoreState } from '../redux/store'

const timeOut = 30 * 1000

const query = RefreshTokenDocument

const useRefreshToken = (): void => {
  const disptah = useDispatch()

  const client = authLessClient

  const refreshToken = useSelector<CoreState, string>(
    (state) => state.auth.refreshToken
  )

  useEffect(() => {
    if (!refreshToken) return () => null
    const a = setTimeout(() => {
      client
        .query<RefreshTokenQuery, RefreshTokenQueryVariables>({
          query: query,
          variables: { refreshToken },
        })
        .then((result) => {
          const { refresh_token, access_token, user } = result.data.refreshToken
          disptah(
            login({
              accessToken: access_token,
              refreshToken: refresh_token,
              user: user,
            })
          )
        })
        .catch((e) => {
          console.log('errors in token', e)
          disptah(logout())
        })
    }, timeOut)
    return () => clearTimeout(a)
  }, [refreshToken])
}

export default useRefreshToken
