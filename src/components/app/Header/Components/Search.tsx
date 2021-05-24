import React from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';

import { openDialog, PortalState } from '../../../../utils/redux/slices/appSlice';
import { GlobalState } from '../../../../utils/redux/store';

const HeaderSearch: React.FC = () => {
  const dispatch = useDispatch();
  const portal = useSelector<GlobalState, PortalState>((state) => state.app.portal);
  const isShown = portal.show && portal.current === 'search';
  const Comp = isShown ? XIcon : SearchIcon;

  return (
    <button type="button" className="block" onClick={() => dispatch(openDialog(AppPortals.Search))}>
      <Comp className="w-6 h-6 cursor-pointer" />
    </button>
  );
};

export default HeaderSearch;
