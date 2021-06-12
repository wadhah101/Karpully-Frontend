import React from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import { openDialog } from '@utils/redux/slices/appSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

interface IHomeBannerProps {}

const image = '/assets/Pattern-Randomized.svg';

export const Banner: React.FC<IHomeBannerProps> = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid w-full h-screen md:grid-cols-2">
      <div
        style={{ background: `url(${image})` }}
        className="flex flex-col justify-center px-3 bg-repeat md:px-32 "
      >
        <h1 className="mb-1 font-bold text-7xl md:text-8xl ">Karpully</h1>
        <h2 className="text-xl font-semibold md:text-2xl text-sblack-222">
          Travel Anytime, Anywhere.
        </h2>
        <p className="mt-2 text-lg text-sblack-333 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae voluptatem ab omnis
          excepturi corrupti. Laborum harum praesentium atque, accusantium, sed illum obcaecati
          tempora provident suscipit facilis nobis minima earum?
        </p>
        <div className="grid items-center grid-cols-2 gap-4 my-4 font-bold md:text-lg ">
          <button
            type="button"
            onClick={() => dispatch(openDialog(AppPortals.Signup))}
            className="grid py-2 text-white bg-opacity-50 rounded bg-gradient-to-br from-kgreen-600 place-items-center to-kgreen-400"
          >
            Join
          </button>

          <Link href="/carpools" passHref>
            <a className="grid py-2 text-white bg-opacity-50 rounded bg-gradient-to-br from-kpink-600 place-items-center to-kpink-400">
              Browse Offers
            </a>
          </Link>
        </div>
        <div className="text-black t text-opacity-70">
          <p>
            The most popular carpooling platform in Tunisia with +1000 users & +100 daily offers
          </p>
        </div>
      </div>
      <div className="hidden overflow-hidden md:grid">
        <img alt="Home page" className="object-cover" src="/assets/home.jpg" />
      </div>
    </div>
  );
};
