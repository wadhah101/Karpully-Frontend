import { Query } from './../../graphql/generated-types'
import { gql } from '@apollo/client'
/* eslint-disable no-console */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authLessClient } from '.'
import { login, logout } from '../redux/slices/authSlice'
import { CoreState } from '../redux/store'

const timeOut = 30 * 1000

const query = gql`
  query refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      refresh_token
      access_token
      user {
        id
        username
        firstname
        lastname
        age
        rate
        email
        localization
        telNumber
        gender
        isConfirmed
      }
    }
  }
`

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
        .query<Query>({ query: query, variables: { refreshToken } })
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
