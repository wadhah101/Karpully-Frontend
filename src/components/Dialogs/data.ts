/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line import/no-cycle
import * as Portals from './exports';

export enum AppPortals {
  Login = 'login',
  Signup = 'signup',
  Reset = 'reset',
  Search = 'search',
  Confirm = 'confirm',
  CompleteInfo = 'completeInfo',
  MapSearch = 'mapSearch',
}

export interface BaseDiagleProps {
  cancelButtonRef: React.MutableRefObject<HTMLButtonElement>;
}

export const BLOCKED_PORTALS: AppPortals[] = [AppPortals.CompleteInfo];

export const PORTALS_WITH_DATA: [AppPortals, () => React.ComponentType<BaseDiagleProps>][] = [
  [AppPortals.Login, () => Portals.Login],
  [AppPortals.Signup, () => Portals.SignUp],
  [AppPortals.Reset, () => Portals.SignUp],
  [AppPortals.Search, () => Portals.Search],
  [AppPortals.Confirm, () => Portals.Confirm],
  [AppPortals.CompleteInfo, () => Portals.CompleteInfo],
  [AppPortals.MapSearch, () => Portals.MapSearch],
];

export const formikErrorFactory = (
  touched: Record<string, boolean>,
  errors: Record<string, string>,
): string[] => Object.entries(touched)
  .filter((e) => e[1])
  .filter((e) => errors[e[0]])
  .map((e) => errors[e[0]]);
