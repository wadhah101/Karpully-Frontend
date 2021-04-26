import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { openDialog } from '../redux/slices/appSlice'
import { logout } from '../redux/slices/authSlice'

const useQueryDetector = (): void => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    const { sign_up_token, sign_up_confirm_token } = router.query

    if (sign_up_token && sign_up_confirm_token) {
      dispatch(logout())
      dispatch(openDialog('completeInfo'))
    }

    return () => null
  }, [router])
}

export default useQueryDetector
