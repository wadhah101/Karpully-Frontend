import React from 'react';

import {
  useGeoEncodeLazyQuery,
  useSearchByPromixityDepartureLazyQuery,
  useSearchByPromixityDestinationLazyQuery,
} from '@graphql/generated-types';
import { closeDialog } from '@utils/redux/slices/appSlice';
import debounce from 'lodash/debounce';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { BaseDiagleProps } from '../../data';
import SearchDialogForm from './Form';
import SearchList from './SearchList';

const SeeAllSearch: React.FC<{ current: string }> = ({ current }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <hr />
      <div className="p-6 text-left ">
        <Link
          passHref
          href={{
            pathname: '/carpools/search',
            query: { q: current },
          }}
        >
          <button
            type="button"
            className="font-semibold hover:underline text-kgreen-500 "
            onClick={() => dispatch(closeDialog())}
          >
            See all results
          </button>
        </Link>
      </div>
    </div>
  );
};

// TODO split into components
const SearchDialog: React.FC<BaseDiagleProps> = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearchQuery = debounce((e: string) => setSearchQuery(e), 200);

  // god forgive me for this double request
  // TODO ask backend for text based search
  const [geoEncodeQuery, { data: geoEncodeData }] = useGeoEncodeLazyQuery();
  const hasGeoEncodedData = !!geoEncodeData?.geoEncoding.length;
  const showResult = hasGeoEncodedData && !!searchQuery.trim();
  const [destinationQuery, { data: destinationData }] = useSearchByPromixityDestinationLazyQuery();
  const [departureQuery, { data: departureData }] = useSearchByPromixityDepartureLazyQuery();

  React.useEffect(() => {
    if (!searchQuery.trim()) return () => null;
    geoEncodeQuery({ variables: { text: searchQuery } });
    return () => null;
  }, [searchQuery]);

  React.useEffect(() => {
    if (!geoEncodeData) return () => null;
    // clone array before mutating
    const sortedEncode = [...geoEncodeData.geoEncoding].sort((e) => -e.importance);
    if (!sortedEncode.length) return () => null;
    const { lat, lon } = sortedEncode[0];
    destinationQuery({ variables: { lon, lat, radius: 100 } });
    departureQuery({ variables: { lat, lon, radius: 100 } });
    return () => null;
  }, [geoEncodeData]);

  React.useEffect(() => {
    router.push(router.asPath, { query: { search: searchQuery } });
    return () => null;
  }, [searchQuery]);

  return (
    <div className="w-[50rem] bg-white rounded">
      <div className="flex flex-col p-6">
        <SearchDialogForm onChange={onChangeSearchQuery} />
      </div>

      <hr />

      <div className="p-6 grid gap-4 min-h-[15rem] max-h-[33rem] overflow-auto text-left">
        {showResult && (
          <>
            <SearchList
              title={`Going To ${searchQuery}`}
              data={destinationData?.carpoolsByProximity.slice(0, 4) as any}
            />

            <SearchList
              title={`Departing From ${searchQuery}`}
              data={departureData?.carpoolsByProximity.slice(0, 4) as any}
            />
          </>
        )}

        {/* this is so bad god please forgive me */}
        {searchQuery.trim() &&
          !(
            departureData?.carpoolsByProximity.length || destinationData?.carpoolsByProximity.length
          ) && <p className="text-black text-opacity-50"> No result </p>}

        {!searchQuery.trim() && <p className="text-black text-opacity-50"> No recent searches </p>}
      </div>
      {searchQuery.trim() && <SeeAllSearch current={searchQuery} />}
    </div>
  );
};

export default SearchDialog;
