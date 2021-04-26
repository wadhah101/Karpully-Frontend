import { closeDialog } from 'src/utils/redux/slices/appSlice'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import {
  ConfirmEmailMutation,
  useConfirmEmailMutation,
} from 'src/graphql/generated-types'
import { useDispatch } from 'react-redux'
import { MutationResult } from '@apollo/client'

// TODO add already confirmed , error ,
const useConfirmEmail = (): MutationResult<ConfirmEmailMutation> => {
  const [mutation, result] = useConfirmEmailMutation()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const {
      sign_up_token,
      sign_up_confirm_token,
      sign_up_user_id,
    } = router.query

    if (!(sign_up_user_id && sign_up_token && sign_up_confirm_token)) {
      dispatch(closeDialog())
    }

    mutation({
      variables: {
        token: sign_up_token as string,
        verificationToken: sign_up_confirm_token as string,
        userId: Number(sign_up_user_id),
      },
    }).catch(() => null)
  }, [])
  return result
}

export default useConfirmEmail
