import * as React from 'react';

interface ISuggestionPanelFeedProps {}

const SuggestionPanelFeed: React.FunctionComponent<ISuggestionPanelFeedProps> = () => (
  <div className="p-3 bg-white border rounded shadow min-h-[40rem]">
    <div>
      <h2 className="text-xl font-extrabold text-transparent md:text-2xl bg-clip-text bg-gradient-to-br from-kgreen-700 to-kgreen-500">
        Suggestions
      </h2>
    </div>
  </div>
);

export default SuggestionPanelFeed;
