import React from 'react';

import clsx from 'clsx';

import { User } from '../../../graphql/generated-types';
import HeaderLogo from './Components/Logo';
import DesktopMenu from './Components/Menu/Desktop';

export interface IStatelessHeaderProps {
  text: { white: boolean };
  body: { transparent: boolean; fixed: boolean };
  user: Partial<User>;
}

export const StatelessHeader: React.FC<IStatelessHeaderProps> = (props) => {
  const {
    body: { fixed },
    text: { white },
    user,
  } = props;
  return (
    <header
      className={clsx(
        'flex flex-col transition-colors duration-300 w-full z-30 items-center top-0 left-0 justify-center h-20 md:px-10 px-4  ',
        fixed ? 'fixed' : 'sticky bg-white  border-b border-black border-opacity-10 ',
        white
          ? 'bg-transparent'
          : 'bg-white bg-opacity-90  border-b border-black border-opacity-10 ',
      )}
    >
      <div className="flex items-center w-full">
        <HeaderLogo user={user} />
        <div className="flex-grow" />
        <DesktopMenu user={props.user} body={props.body} text={props.text} />
      </div>
    </header>
  );
};
