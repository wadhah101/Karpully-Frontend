import { APP_PORTALS } from '@comp/Dialogs/data'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { openDialog } from '../redux/slices/appSlice'
import { logout } from '../redux/slices/authSlice'

const useQueryDetector = (): void => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    const {
      sign_up_token,
      sign_up_verification_token,
      sign_up_user_id,
    } = router.query

    if (sign_up_user_id && sign_up_token && sign_up_verification_token) {
      dispatch(logout())
      dispatch(openDialog(APP_PORTALS.CompleteInfo))
    }

    return () => null
  }, [router])
}

export default useQueryDetector
