import * as React from 'react';

import { AppPortals } from '@comp/Dialogs/data';
import { Carpool } from '@graphql/generated-types';
import { openDialog } from '@utils/redux/slices/appSlice';
import { setCurrentCarpool } from '@utils/redux/slices/carpoolsSlice';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';

interface ISearchResultElementProps {
  data: Partial<Carpool>;
}

const SearchResultElement: React.FunctionComponent<ISearchResultElementProps> = ({ data }) => {
  const dispatch = useDispatch();
  const formatedDate = dayjs(data.departureDate).format('ddd DD/MM/YYYY');
  const formatHour = dayjs(data.departureDate).format('HH:mm');
  return (
    <button
      onClick={() => {
        dispatch(setCurrentCarpool(data));
        dispatch(openDialog(AppPortals.CarpoolView));
      }}
      type="button"
      className="block w-full p-3 text-left transition-colors bg-white border rounded shadow-sm hover:bg-gray-100"
    >
      <p>
        Departure : <strong>{data.departureLocation.display_name.trim()}</strong>
      </p>

      <p>
        Destination : <strong> {data.destinationLocation.display_name.trim()}</strong>
      </p>
      <p className="">
        Time :&nbsp;
        <strong>
          {formatedDate} at {formatHour}
        </strong>
      </p>
      <div className="text-sm font-semibold text-right text-black text-opacity-70 ">
        <p className="cursor-pointer hover:underline"> @{data.owner.username}</p>
      </div>
    </button>
  );
};

export default SearchResultElement;
