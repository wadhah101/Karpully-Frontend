import React from 'react'
import HeaderLogo from './Components/Header.logo'
import Link from 'next/link'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { openPortal } from '../../../utils/redux/slices/appSlice'
import {
  HEADER_NAV_LINKS_SIGNED_IN,
  HEADER_NAV_LINKS_SIGNED_OUT,
} from './Header.data'
import { User } from '../../../graphql/generated-types'
import HeaderProfile from './Components/Header.profile'

interface IStatelessHeaderProps {
  text: { white: boolean }
  body: { transparent: boolean; fixed: boolean }
  user: Partial<User>
}

export const StatelessHeader: React.FC<IStatelessHeaderProps> = ({
  body: { fixed },
  text: { white },
  user,
}) => {
  const dispatch = useDispatch()
  const navLinksLocal = user
    ? HEADER_NAV_LINKS_SIGNED_IN
    : HEADER_NAV_LINKS_SIGNED_OUT
  return (
    <header
      className={clsx(
        'flex flex-col w-screen z-30 items-center top-0 left-0 justify-center h-24 px-10  ',
        fixed ? 'fixed' : 'static'
      )}
    >
      <div className="flex items-center w-full">
        <HeaderLogo user={user} />
        <div className="flex-grow" />
        <nav>
          <ul
            className={clsx(
              'grid items-center transition-colors duration-300 ease-in-out grid-flow-col-dense gap-6 font-semibold  capitalize ',
              white
                ? 'text-white text-opacity-80'
                : 'text-black text-opacity-75'
            )}
          >
            {navLinksLocal.map((e) =>
              e.link.name !== 'arrange' ? (
                <li key={e.link.name}>
                  <Link passHref href={e.link.to}>
                    <a>{e.link.name}</a>
                  </Link>
                </li>
              ) : (
                <li
                  key={e.link.name}
                  className={clsx(!user && 'cursor-pointer ')}
                  onClick={() => !user && dispatch(openPortal('login'))}
                >
                  {user ? (
                    <Link passHref href={e.link.to}>
                      <a>{e.link.name}</a>
                    </Link>
                  ) : (
                    e.link.name
                  )}
                </li>
              )
            )}
            {user ? (
              <HeaderProfile user={user} />
            ) : (
              <React.Fragment>
                <li className="">
                  <button
                    className="font-semibold"
                    onClick={() => dispatch(openPortal('login'))}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => dispatch(openPortal('signup'))}
                    className="grid px-8 py-2.5 text-white bg-opacity-50 rounded bg-gradient-to-r from-kgreen-700 font-semibold place-items-center to-kgreen-400 "
                  >
                    Sign Up
                  </button>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
