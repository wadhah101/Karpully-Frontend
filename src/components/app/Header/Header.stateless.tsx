import React from 'react'
import HeaderLogo from './Components/Header.logo'
import Link from 'next/link'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { openPortal } from '../../../utils/redux/slices/appSlice'
import { HEADER_NAV_LINKS } from './Header.data'

interface IStatelessHeaderProps {
  text: { white: boolean }
  body: { transparent: boolean; fixed: boolean }
}

export const StatelessHeader: React.FC<IStatelessHeaderProps> = ({
  body: { fixed },
  text: { white },
}) => {
  const dispatch = useDispatch()
  const navLinksLocal = [...HEADER_NAV_LINKS]
  return (
    <header
      className={clsx(
        'flex flex-col w-screen z-30 items-center top-0 left-0 justify-center h-24 px-8  ',
        fixed ? 'fixed' : 'static'
      )}
    >
      <div className="flex items-center w-full">
        <HeaderLogo />
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
            {navLinksLocal.map((e) => (
              <Link passHref key={e.link.name} href={e.link.to}>
                <a>
                  <li>{e.link.name}</li>
                </a>
              </Link>
            ))}
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
                className="grid px-8 py-2.5 text-white bg-opacity-50 rounded bg-gradient-to-r from-kgreen-700 font-semibold place-items-center to-kgreen-300 "
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
