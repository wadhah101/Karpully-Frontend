import { useNotificationsQuery, User } from '@graphql/generated-types';
import dayjs from 'dayjs';

import StateLessNotificationBell, { AppNotifications } from './stateless';

interface IHeaderNotificationBell {
  user: Partial<User>;
}

const HeaderNotificationBell: React.FC<IHeaderNotificationBell> = ({ user }) => {
  const { data, loading, error } = useNotificationsQuery({
    variables: { page: 1, limit: 8, userId: user.id },
  });

  const arr: AppNotifications[] = new Array(30).fill(null).map((_, index) => ({
    id: index,
    picture: `https://source.unsplash.com/80x80/?cat${index}`,
    date: dayjs()
      .subtract(index * 10, 'minute')
      .toDate(),
    content: `Hello i am notification ${index}, user ${index} accepted you`,
  }));
  return (
    // TODO added loading state and error state
    <StateLessNotificationBell
      onOpen={() => null}
      notifications={loading || error || data.notifications.items.length === 0 ? [] : arr}
      hasMissed
    />
  );
};

export default HeaderNotificationBell;
