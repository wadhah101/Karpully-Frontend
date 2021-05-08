import { APP_PORTALS } from '@comp/Portals/Dialogs.data'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openDialog } from 'src/utils/redux/slices/appSlice'
import { User } from '../../../graphql/generated-types'
import { CoreState } from '../../../utils/redux/store'
import { StatelessHeader } from './Header.stateless'

// TODO program
const pageWithScrollColorChangeChecker = (current: string): boolean =>
  current === '/'

const Header: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [fixed, setFixed] = useState(false)
  const pageWithScrollColorChange = pageWithScrollColorChangeChecker(
    router.pathname
  )
  const [textWhiteWithScroll, setTextWhite] = useState({ white: true })

  const user = useSelector<CoreState, Partial<User>>((state) => state.auth.user)

  useEffect(() => {
    if (user && !user.completedSignUp)
      dispatch(openDialog(APP_PORTALS.CompleteInfo))
  }, [user])

  useEffect(() => {
    if (!pageWithScrollColorChange) {
      setFixed(false)
      return () => null
    }

    setFixed(true)

    const threshold = window.innerWidth > 600 ? window.innerHeight - 300 : 300
    let lastKnownScrollPosition = 0
    let ticking = false

    const doSomething = (scrollPos: number) => {
      if (scrollPos > threshold && textWhiteWithScroll.white)
        setTextWhite({ white: false })
      else if (scrollPos <= threshold && !textWhiteWithScroll.white) {
        setTextWhite({ white: true })
      }
    }
    doSomething(window.scrollY)

    const work = () => {
      lastKnownScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          doSomething(lastKnownScrollPosition)
          ticking = false
        })
        ticking = true
      }
    }
    document.addEventListener('scroll', work)
    return () => document.removeEventListener('scroll', work)
  }, [textWhiteWithScroll, router])
  return (
    <StatelessHeader
      user={user}
      text={pageWithScrollColorChange && textWhiteWithScroll}
      body={{ transparent: true, fixed }}
    />
  )
}

export default Header
