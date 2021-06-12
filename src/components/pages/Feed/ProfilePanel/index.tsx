import * as React from 'react';

import { getProfilePictureUrl } from '@utils/app/getProfilePictureUrl';
import dayjs from 'dayjs';
import Link from 'next/link';
import { User } from 'src/graphql/generated-types';

interface IProfilePanelProps {
  user: Partial<User>;
}

const ProfilePanel: React.FunctionComponent<IProfilePanelProps> = ({ user }) => {
  const fullName = `${user.firstname} ${user.lastname}`;
  const joinedSince = dayjs(user.createdAt).format('DD/MM/YYYY');

  return (
    <div className="bg-white border rounded shadow min-h-[30rem] ">
      <div className="h-24 bg-kgreen-500" />
      <div className="flex flex-col items-center transform -translate-y-11">
        <div className="p-1 overflow-hidden bg-white rounded-full">
          <img
            alt="user"
            src={getProfilePictureUrl(user)}
            className="w-20 h-20 overflow-hidden rounded-full shadow"
          />
        </div>
        <h2 className="mt-2 text-xl font-semibold text-black capitalize text-opacity-80">
          {fullName}
        </h2>
        <Link href={`/user/profile/${user.id}`} passHref>
          <a>
            <h3 className="mt-1 text-sm font-semibold text-black capitalize cursor-pointer hover:underline text-opacity-70">
              @{user.username}
            </h3>
          </a>
        </Link>
        <p className="text-sm font-semibold text-black capitalize text-opacity-70">
          Member Since {joinedSince}
        </p>

        <hr className="flex-grow w-full my-2" />
        <div className="self-stretch px-3 text-left text-black capitalize text-opacity-60 ">
          <p>Total Submisisons : 23</p>
          <p>Friends Count : 20</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
