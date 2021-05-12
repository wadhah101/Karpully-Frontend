import React from 'react'
import { User } from '../../../../../graphql/generated-types'
import HeaderSearch from '../Search'

import HeaderNotificationBell from '../NotificationBell'
import { ProfileMenu } from './Menu'

interface IHeaderProfileProps {
  user: Partial<User>
}

const HeaderProfile: React.FC<IHeaderProfileProps> = () => {
  return (
    <div className="grid items-center grid-flow-col-dense gap-4">
      <HeaderSearch />
      <HeaderNotificationBell />
      <ProfileMenu />
    </div>
  )
}

export default HeaderProfile
