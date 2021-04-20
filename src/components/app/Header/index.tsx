import React, { useEffect, useState } from 'react'
import StatelessHeader from './StatelessHeader'

interface Props {}

export const Header: React.FC<Props> = () => {
  const [textWhite, setTextWhite] = useState({ white: true })
  useEffect(() => {
    let lastKnownScrollPosition = 0
    let ticking = false

    const doSomething = (scrollPos: number) => {
      if (scrollPos > window.innerHeight && textWhite.white)
        setTextWhite({ white: false })
      else if (scrollPos <= window.innerHeight && !textWhite.white) {
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
  }, [textWhite])
  return (
    <StatelessHeader
      text={textWhite}
      body={{ transparent: true, fixed: true }}
    />
  )
}
