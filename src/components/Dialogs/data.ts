/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Portals from './exports'

export type AppPortals =
  | 'login'
  | 'signup'
  | 'reset'
  | 'search'
  | 'confirm'
  | 'completeInfo'

export enum APP_PORTALS {
  Login = 'login',
  Signup = 'signup',
  Reset = 'reset',
  Search = 'search',
  Confirm = 'confirm',
  CompleteInfo = 'completeInfo',
  MapSearch = 'mapSearch',
}

export interface BaseDiagleProps {
  cancelButtonRef: React.MutableRefObject<HTMLButtonElement>
}

export const BLOCKED_PORTALS: APP_PORTALS[] = [APP_PORTALS.CompleteInfo]

export const PORTALS_WITH_DATA: [
  APP_PORTALS,
  () => React.ComponentType<BaseDiagleProps>
][] = [
  [APP_PORTALS.Login, () => Portals.Login],
  [APP_PORTALS.Signup, () => Portals.SignUp],
  [APP_PORTALS.Reset, () => Portals.SignUp],
  [APP_PORTALS.Search, () => Portals.Search],
  [APP_PORTALS.Confirm, () => Portals.Confirm],
  [APP_PORTALS.CompleteInfo, () => Portals.CompleteInfo],
  [APP_PORTALS.MapSearch, () => Portals.MapSearch],
]

export const formikErrorFactory = (
  touched: Record<string, boolean>,
  errors: Record<string, string>
): string[] =>
  Object.entries(touched)
    .filter((e) => e[1])
    .filter((e) => errors[e[0]])
    .map((e) => errors[e[0]])
