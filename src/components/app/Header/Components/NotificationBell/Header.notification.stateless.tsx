import { BellIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export interface AppNotifications {
  id: number
  picture: string
  content: string
  date: Date
}

interface IStateLessNotificationBell {
  hasMissed: boolean
  onOpen: () => void
  notifications: AppNotifications[]
}

const StateLessNotificationBell: React.FC<IStateLessNotificationBell> = ({
  notifications,
  hasMissed,
  onOpen,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              name="notification button"
              onClick={onOpen}
              className="outline-none "
            >
              <div className="relative cursor-pointer">
                <BellIcon className="w-6 h-6" />
                {hasMissed && (
                  <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-kpink-500" />
                )}
              </div>
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
              style={{ maxHeight: `calc(100vh - 12rem)` }}
              className="absolute right-0 mt-2 overflow-y-auto origin-top-right bg-white divide-y divide-gray-100 rounded shadow w-96 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div>
                <h3 className="py-5 pl-4 text-3xl font-extrabold text-kpurple-500 bg-kpurple-100 bg-opacity-30 text-opacity-80">
                  Notifications
                </h3>
              </div>
              <div className="px-1 py-1 ">
                {notifications.map((e) => (
                  <Menu.Item key={e.id}>
                    {({ active }: { active: boolean }) => (
                      <div>
                        <Link href={`/user/notifications`} passHref>
                          <a
                            className={`${
                              active ? 'bg-opacity-40 bg-gray-300 ' : ''
                            } group flex text-gray-800 transition-all font-semibold rounded-md items-center w-full px-2 py-3  text-sm`}
                          >
                            <img
                              loading="lazy"
                              className="w-12 h-12 mr-3 rounded-full"
                              alt={`${e.id}`}
                              src={e.picture}
                            />
                            <div className="flex flex-col">
                              <p>{e.content}</p>
                              <p className="text-xs font-bold text-kpurple-500 ">
                                {dayjs(e.date).fromNow()}
                              </p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default StateLessNotificationBell
