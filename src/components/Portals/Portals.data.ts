import * as Portals from './exports'

export type AppPortals = 'login' | 'signup' | 'reset'

export const PORTALS_WITH_DATA: [AppPortals, React.FC][] = [
  ['login', Portals.Login],
  ['signup', Portals.Signup],
  ['reset', Portals.Signup],
]
