import * as React from 'react'
import { User } from 'src/graphql/generated-types'

interface IProfilePanelProps {
  user: Partial<User>
}

const ProfilePanel: React.FunctionComponent<IProfilePanelProps> = ({
  user,
}) => {
  const imageId = 'IuJc2qh2TcA'
  const fullName = `${user.firstname} ${user.lastname}`

  return (
    <div className="bg-white rounded shadow min-h-[30rem] ">
      <div className="h-24 bg-kgreen-500" />
      <div className="flex flex-col items-center transform -translate-y-10">
        <div className="p-1 overflow-hidden bg-white rounded-full">
          <img
            alt="user image"
            src={`https://source.unsplash.com/${imageId}/200x200`}
            className="w-20 h-20 overflow-hidden rounded-full"
          />
        </div>
        <h2 className="font-semibold text-black capitalize text-opacity-80">
          {fullName}
        </h2>
      </div>
    </div>
  )
}

export default ProfilePanel
