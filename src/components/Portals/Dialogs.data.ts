/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Portals from './exports'

export type AppPortals =
  | 'login'
  | 'signup'
  | 'reset'
  | 'search'
  | 'confirm'
  | 'completeInfo'

export interface BaseDiagleProps {
  cancelButtonRef: React.MutableRefObject<HTMLButtonElement>
}

export const BLOCKED_PORTALS: AppPortals[] = ['completeInfo']

export const PORTALS_WITH_DATA: [
  AppPortals,
  () => React.ComponentType<BaseDiagleProps>
][] = [
  ['login', () => Portals.Login],
  ['signup', () => Portals.SignUp],
  ['reset', () => Portals.SignUp],
  ['search', () => Portals.Search],
  ['confirm', () => Portals.Confirm],
  ['completeInfo', () => Portals.CompleteInfo],
]

export const formikErrorFactory = (
  touched: Record<string, boolean>,
  errors: Record<string, string>
): string[] =>
  Object.entries(touched)
    .filter((e) => e[1])
    .filter((e) => errors[e[0]])
    .map((e) => errors[e[0]])
