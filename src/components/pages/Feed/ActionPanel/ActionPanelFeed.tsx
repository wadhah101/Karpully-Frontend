import * as React from 'react'

interface IFriendsPanelFeedProps {}

const ActionPanelFeed: React.FunctionComponent<IFriendsPanelFeedProps> = () => {
  return (
    <div className="flex flex-col h-40 p-3 bg-white border rounded shadow ">
      <h3 className="text-lg font-semibold text-black text-opacity-80">
        ACTION_PANEL_TODO
      </h3>
    </div>
  )
}

export default ActionPanelFeed
