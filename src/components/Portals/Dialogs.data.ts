/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Portals from './exports'

export type AppPortals = 'login' | 'signup' | 'reset'

export interface BaseDiagleProps {
  cancelButtonRef: React.MutableRefObject<HTMLButtonElement>
}

export const PORTALS_WITH_DATA: [
  AppPortals,
  () => React.ComponentType<BaseDiagleProps>
][] = [
  ['login', () => Portals.Login],
  ['signup', () => Portals.SignUp],
  ['reset', () => Portals.SignUp],
]
