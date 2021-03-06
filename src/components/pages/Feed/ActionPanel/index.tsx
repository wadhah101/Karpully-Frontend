import * as React from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import * as Forms from '@comp/Forms/export';
import OnChangeBind from '@comp/Forms/OnChangeBind';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { openDialog } from '@utils/redux/slices/appSlice';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

interface IFriendsPanelFeedProps {}
const initialValues = { search: '' };

const ActionPanelFeed: React.FunctionComponent<IFriendsPanelFeedProps> = () => {
  const [current, setCurrent] = React.useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col px-3 py-6 bg-white border rounded shadow ">
      <Formik onSubmit={() => null} initialValues={initialValues}>
        <Form>
          <Forms.Input
            id="search"
            name="search"
            rightIconOnClick={() => current.trim() && router.push(`/carpools/search?q=${current}`)}
            RightIcon={SearchIcon}
            placeholder="Search"
          />
          <OnChangeBind cls={initialValues} onChange={({ search }) => setCurrent(search)} />
        </Form>
      </Formik>
      <button
        type="button"
        onClick={() => dispatch(openDialog(AppPortals.MapSearch))}
        className=" flex w-full  items-center justify-center   py-2.5 text-white rounded bg-gradient-to-r from-kgreen-600  mt-6 font-bold shadow  to-kgreen-500 "
      >
        Search With Map
        <div>
          <LocationMarkerIcon className="w-5 h-5 ml-2 " />
        </div>
      </button>
    </div>
  );
};

export default ActionPanelFeed;
