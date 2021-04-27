import {
  RefreshTokenDocument,
  RefreshTokenQuery,
  RefreshTokenQueryVariables,
} from './../../graphql/generated-types'
/* eslint-disable no-console */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authLessClient } from './useApolloClient'
import { logout, refreshTokenAction } from '../redux/slices/authSlice'
import { CoreState } from '../redux/store'

const timeOut = 30 * 1000

const useRefreshToken = (): void => {
  const disptah = useDispatch()

  const updateToken = () => {
    authLessClient
      .query<RefreshTokenQuery, RefreshTokenQueryVariables>({
        query: RefreshTokenDocument,
        variables: { refreshToken },
      })
      .then((result) => {
        const { refresh_token, access_token, user } = result.data.refreshToken
        disptah(
          refreshTokenAction({
            accessToken: access_token,
            refreshToken: refresh_token,
            user: user,
          })
        )
      })
      .catch((e) => {
        console.error('errors in token', JSON.stringify(e))
        disptah(logout())
      })
  }

  const refreshToken = useSelector<CoreState, string>(
    (state) => state.auth.refreshToken
  )

  useEffect(() => {
    if (!refreshToken) return () => null
    const a = setTimeout(() => updateToken(), timeOut)
    return () => clearTimeout(a)
  }, [refreshToken])

  useEffect(() => {
    if (!refreshToken) return () => null
    updateToken()
    return () => null
  }, [])
}

export default useRefreshToken
