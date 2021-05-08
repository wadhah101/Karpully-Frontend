import StateLessNotificationBell, {
  AppNotifications,
} from './stateless'
import dayjs from 'dayjs'

const HeaderNotificationBell: React.FC = () => {
  const data: AppNotifications[] = new Array(30).fill(null).map((_, index) => ({
    id: index,
    picture: `https://source.unsplash.com/80x80/?cat${index}`,
    date: dayjs()
      .subtract(index * 10, 'minute')
      .toDate(),
    content: `Hello i am notification ${index}, user ${index} accepted you`,
  }))
  return (
    <StateLessNotificationBell
      onOpen={() => null}
      notifications={data}
      hasMissed={true}
    />
  )
}

export default HeaderNotificationBell
