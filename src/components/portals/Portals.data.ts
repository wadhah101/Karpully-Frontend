import LoginPortal from './login'
import SignupPortal from './signup'

export type AppPortals = 'login' | 'signup'

export const PORTALS_WITH_DATA: [AppPortals, React.FC][] = [
  ['login', LoginPortal],
  ['signup', SignupPortal],
]
