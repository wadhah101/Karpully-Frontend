import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useConfirmEmailMutation } from 'src/graphql/generated-types'
import { useDispatch } from 'react-redux'
import { loginAction } from 'src/utils/redux/slices/authSlice'

// TODO add already confirmed , error ,
const useConfirmEmail = (): void => {
  const [mutation, { data }] = useConfirmEmailMutation()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const {
      sign_up_token,
      sign_up_verification_token,
      sign_up_user_id,
    } = router.query

    if (sign_up_user_id && sign_up_token && sign_up_verification_token)
      mutation({
        variables: {
          token: String(sign_up_token),
          verificationToken: String(sign_up_verification_token),
          userId: Number(sign_up_user_id),
        },
      }).catch(() => null)
  }, [])

  useEffect(() => {
    if (data) {
      const { user, access_token, refresh_token } = data.confirmEmail
      dispatch(
        loginAction({
          refreshToken: refresh_token,
          accessToken: access_token,
          user,
        })
      )
    }
    return () => null
  }, [data])
}

export default useConfirmEmail
