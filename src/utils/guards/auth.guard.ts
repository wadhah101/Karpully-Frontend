import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { User } from '../../graphql/generated-types'
import { CoreState } from '../redux/store'

export const useAuthGuard = (): void => {
  const router = useRouter()
  const user = useSelector<CoreState, Partial<User>>((state) => state.auth.user)
  useEffect(() => {
    if (router && !user) router.push('/')
    return () => null
  }, [router, user])
}
