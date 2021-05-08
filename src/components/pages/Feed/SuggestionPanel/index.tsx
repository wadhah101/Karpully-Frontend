import * as React from 'react'

interface ISuggestionPanelFeedProps {}

const SuggestionPanelFeed: React.FunctionComponent<ISuggestionPanelFeedProps> = () => {
  return (
    <div className="p-3 bg-white border rounded shadow min-h-[40rem]">
      <div>
        <h3 className="text-lg font-semibold text-black text-opacity-80">
          Suggestions
        </h3>
      </div>
    </div>
  )
}

export default SuggestionPanelFeed
