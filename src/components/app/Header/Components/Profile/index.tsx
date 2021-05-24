import React from 'react';

import { User } from '../../../../../graphql/generated-types';
import HeaderNotificationBell from '../NotificationBell';
import HeaderSearch from '../Search';
import { ProfileMenu } from './Menu';

interface IHeaderProfileProps {
  user: Partial<User>;
}

const HeaderProfile: React.FC<IHeaderProfileProps> = ({ user }) => (
  <div className="grid items-center grid-flow-col-dense gap-4">
    <HeaderSearch />
    <HeaderNotificationBell user={user} />
    <ProfileMenu />
  </div>
);

export default HeaderProfile;
