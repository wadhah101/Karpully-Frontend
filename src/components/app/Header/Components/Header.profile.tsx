import React from 'react'
import { User } from '../../../../graphql/generated-types'
import HeaderSearch from './Header.search'
import { Menu, Transition } from '@headlessui/react'
import {
  UserCircleIcon,
  InboxIcon,
  LogoutIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid'

import { Fragment } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { logout } from '../../../../utils/redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const ImageButton: React.FC = () => {
  const imageId = 'IuJc2qh2TcA'
  return (
    <div className="relative pr-4 text-black text-opacity-50 transition-colors hover:text-opacity-100">
      <img
        alt="user image"
        src={`https://source.unsplash.com/${imageId}/100x100`}
        className="w-10 h-10 overflow-hidden rounded-full"
      />
      <div className="absolute right-0 -bottom-2 ">
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </div>
  )
}

// TODO  extract components for menu items
const ProfileMenu: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="outline-none ">
                <ImageButton />
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        <Link href="/user/profile" passHref>
                          <a
                            className={`${
                              active ? 'bg-opacity-40 bg-kgreen-100 ' : ''
                            } group flex text-gray-800 transition-all font-semibold rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            <div
                              className={clsx(
                                'mr-3 transition-all text-black text-opacity-50 '
                              )}
                            >
                              <UserCircleIcon className="w-6 h-6" />
                            </div>
                            Profile
                          </a>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div>
                        <Link passHref href="user/messages">
                          <a
                            className={`${
                              active ? 'bg-opacity-40 bg-kpink-100' : ''
                            } group flex text-gray-800 font-semibold transition-colors rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            <div className="mr-3 text-black text-opacity-50">
                              <InboxIcon className="w-6 h-6" />
                            </div>
                            Messages
                          </a>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => dispatch(logout())}
                        className={`${
                          active ? 'bg-opacity-40  bg-gray-300 ' : ''
                        } group flex text-gray-800 transition-all font-semibold rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <div
                          className={clsx(
                            'mr-3 transition-all text-black text-opacity-50 '
                          )}
                        >
                          <LogoutIcon className="w-6 h-6" />
                        </div>
                        Sign Out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

interface IHeaderProfileProps {
  user: Partial<User>
}

const HeaderProfile: React.FC<IHeaderProfileProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <div className="grid items-center grid-flow-col-dense gap-4">
      <HeaderSearch />
      <ProfileMenu />
    </div>
  )
}

export default HeaderProfile
