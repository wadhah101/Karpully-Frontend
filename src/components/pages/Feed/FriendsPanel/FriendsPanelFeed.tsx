import Link from 'next/link'
import * as React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

interface IFriendsPanelFeedProps {}

const FriendsPanelFeed: React.FunctionComponent<IFriendsPanelFeedProps> = () => {
  const data = new Array(6).fill(null).map((_, index) => ({
    id: index,
    picture: `https://source.unsplash.com/80x80/?cat${index}`,
    content: `friend ${index}`,
  }))
  return (
    <div className="flex flex-col p-3 bg-white rounded shadow ">
      <h3 className="text-lg font-semibold text-black text-opacity-80">
        Friends
      </h3>
      <ul className="grid gap-4 mt-4">
        {data.map((e) => (
          <div className="flex" key={e.id}>
            <img
              className="overflow-hidden rounded-full w-14 h-14"
              alt={e.content}
              src={e.picture}
            />
            <div className="ml-2">
              <p className="font-semibold capitalize">{e.content}</p>
              <button className="px-3 py-1.5 text-white rounded shadow bg-kgreen-400">
                Chat
              </button>
            </div>
          </div>
        ))}
      </ul>
      <Link href="/" passHref>
        <a className="flex items-center mt-4 text-black text-opacity-50">
          <p>View all friends</p>
          <div>
            <ArrowNarrowRightIcon className="w-4 h-4 ml-1" />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default FriendsPanelFeed
