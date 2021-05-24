import React from 'react';

import { User } from '@graphql/generated-types';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { getProfilePictureUrl } from '@utils/app/getProfilePictureUrl';
import { GlobalState } from '@utils/redux/store';
import { useSelector } from 'react-redux';

export const ImageButton: React.FC = () => {
  const user = useSelector<GlobalState, Partial<User>>((state) => state.auth.user);

  return (
    <div className="relative pr-4 text-black text-opacity-50 transition-colors hover:text-opacity-100">
      <img
        alt="user"
        src={getProfilePictureUrl(user)}
        className="w-10 h-10 overflow-hidden rounded-full"
      />
      <div className="absolute right-0 -bottom-2 ">
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </div>
  );
};
