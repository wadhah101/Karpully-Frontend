import * as React from 'react';

import { HEADER_NAV_LINKS_SIGNED_IN, HEADER_NAV_LINKS_SIGNED_OUT } from '@comp/app/Header/data';
import { IStatelessHeaderProps } from '@comp/app/Header/Stateless';
import { AppPortals } from '@comp/Dialogs/data';
import { openDialog } from '@utils/redux/slices/appSlice';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import HeaderProfile from '../../Profile';
import DektopNavItem from './Item';

const DesktopMenu: React.FunctionComponent<Partial<IStatelessHeaderProps>> = ({
  user,
  text: { white },
}) => {
  const dispatch = useDispatch();
  const navLinksLocal = user ? HEADER_NAV_LINKS_SIGNED_IN : HEADER_NAV_LINKS_SIGNED_OUT;

  const links = navLinksLocal.map((e) =>
    e.link.name === 'arrange' && !user
      ? { data: e, onClick: () => dispatch(openDialog(AppPortals.Login)) }
      : { data: e },
  );

  return (
    <nav>
      <ul
        className={clsx(
          'grid items-center transition-colors duration-300 ease-in-out grid-flow-col-dense gap-6 font-semibold  capitalize ',
          white ? 'text-white text-opacity-80' : 'text-black text-opacity-75',
        )}
      >
        {links.map(({ data, onClick }) => (
          <li key={data.link.name}>
            <DektopNavItem onClick={onClick} data={data} />
          </li>
        ))}

        {user ? (
          <li>
            <HeaderProfile user={user} />
          </li>
        ) : (
          <>
            <li className="">
              <button
                type="button"
                className="font-semibold"
                onClick={() => dispatch(openDialog(AppPortals.Login))}
              >
                Login
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => dispatch(openDialog(AppPortals.Signup))}
                className="grid px-8 py-2.5 text-white bg-opacity-50 rounded bg-gradient-to-r from-kgreen-700 font-semibold place-items-center to-kgreen-400 "
              >
                Sign Up
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
