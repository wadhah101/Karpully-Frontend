import * as Portals from './exports'

export type AppPortals = 'login' | 'signup'

export const PORTALS_WITH_DATA: [AppPortals, React.FC][] = [
  ['login', Portals.Login],
  ['signup', Portals.Signup],
]
