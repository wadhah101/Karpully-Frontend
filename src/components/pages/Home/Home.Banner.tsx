import Link from 'next/link'
import React from 'react'

interface IHomeBannerProps {}

// const aspectRatio = 4480 / 6720
// const width = 1920 / 2

const image = '/assets/Pattern-Randomized.svg'

export const Banner: React.FC<IHomeBannerProps> = () => {
  return (
    <div className="grid w-full h-screen grid-cols-2 ">
      <div
        style={{ background: `url(${image})` }}
        className="flex flex-col justify-center px-32 bg-repeat "
      >
        <h1 className="mb-1 font-bold text-8xl ">Karpully</h1>
        <h2 className="text-2xl font-semibold text-sblack-222 ">
          Travel Anytime, Anywhere.
        </h2>
        <p className="mt-2 text-lg text-sblack-333 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae
          voluptatem ab omnis excepturi corrupti. Laborum harum praesentium
          atque, accusantium, sed illum obcaecati tempora provident suscipit
          facilis nobis minima earum?
        </p>
        <div className="grid items-center grid-cols-2 gap-4 my-4 text-lg font-bold ">
          <Link href="/user/signup" passHref>
            <a className="grid py-2 text-white bg-opacity-50 rounded bg-gradient-to-r from-kgreen-600 place-items-center to-kgreen-300">
              Join
            </a>
          </Link>

          <Link href="/carpools" passHref>
            <a className="grid py-2 text-white bg-opacity-50 rounded bg-gradient-to-r from-kpink-600 place-items-center to-kpink-300">
              Browse Offers
            </a>
          </Link>
        </div>
        <div className="text-black t text-opacity-70">
          <p>
            The most popular carpooling platform in Tunisia with +1000 users &
            +100 daily offers
          </p>
        </div>
      </div>
      <div className="grid overflow-hidden">
        <img className="object-cover" src="/assets/home.jpg" />
      </div>
    </div>
  )
}
