import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { User } from '../../../graphql/generated-types'
import { CoreState } from '../../../utils/redux/store'
import { StatelessHeader } from './Header.stateless'

// TODO program
const pageWithScrollColorChangeChecker = (current: string): boolean =>
  current === '/'

const Header: React.FC<WithRouterProps> = ({ router }) => {
  const pageWithScrollColorChange = pageWithScrollColorChangeChecker(
    router.pathname
  )
  const [textWhiteWithScroll, setTextWhite] = useState({ white: true })

  const user = useSelector<CoreState, Partial<User>>((state) => state.auth.user)

  useEffect(() => {
    if (!pageWithScrollColorChange) return () => null
    const threshold = window.innerWidth > 600 ? window.innerHeight - 100 : 300
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
  }, [textWhiteWithScroll])
  return (
    <StatelessHeader
      user={user}
      text={pageWithScrollColorChange && textWhiteWithScroll}
      body={{ transparent: true, fixed: true }}
    />
  )
}

export default withRouter(Header)
