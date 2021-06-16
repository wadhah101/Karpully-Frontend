import React from 'react';

import { Carpool } from '@graphql/generated-types';

import SearchResultElement from './SearchResultElement';

interface SearchListProps {
  title: string;
  data: Partial<Carpool>[];
}

const SearchList: React.FC<SearchListProps> = ({ title, data }) => {
  console.log('search list', data);
  return data && data.length ? (
    <div>
      <h3 className="font-bold text-black text-opacity-70">{title}</h3>
      <ul className="grid gap-2 mt-3">
        {data.map((e) => (
          <li className="block" key={e.id}>
            <SearchResultElement data={e} />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default SearchList;
