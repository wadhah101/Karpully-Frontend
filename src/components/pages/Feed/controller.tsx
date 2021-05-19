import * as React from 'react';

import { useSelector } from 'react-redux';
import { User } from 'src/graphql/generated-types';
import { CoreState } from 'src/utils/redux/store';

import ActionPanelFeed from './ActionPanel';
import MyCarpoolsFeed from './MyCarpoolsPanel';
import ProfilePanel from './ProfilePanel';
import SubmittedCarpools from './SubmittedCarpools';
import SuggestionPanelFeed from './SuggestionPanel';

interface IFeedControllerProps {}

const FeedController: React.FC<IFeedControllerProps> = () => {
  const user = useSelector<CoreState, Partial<User>>((state) => state.auth.user);
  return user ? (
    <div className="grid gap-x-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <ProfilePanel user={user} />
      </div>
      <div className="flex flex-col md:col-span-6">
        <div>
          <MyCarpoolsFeed />
        </div>
        <div className="mt-4">
          <SubmittedCarpools />
        </div>
      </div>
      <div className="flex flex-col md:col-span-3 ">
        <div>
          <ActionPanelFeed />
        </div>
        <div className="mt-4">
          <SuggestionPanelFeed />
        </div>
      </div>
    </div>
  ) : null;
};

export default FeedController;
