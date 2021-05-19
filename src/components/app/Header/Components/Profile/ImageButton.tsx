import React from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

export const ImageButton: React.FC = () => {
  const imageId = 'IuJc2qh2TcA';
  return (
    <div className="relative pr-4 text-black text-opacity-50 transition-colors hover:text-opacity-100">
      <img
        alt="user"
        src={`https://source.unsplash.com/${imageId}/100x100`}
        className="w-10 h-10 overflow-hidden rounded-full"
      />
      <div className="absolute right-0 -bottom-2 ">
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </div>
  );
};
