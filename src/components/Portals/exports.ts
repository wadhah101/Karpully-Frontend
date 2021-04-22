import Controller from './Portals.controller'
import dynamic from 'next/dynamic'

const Login = dynamic(() => import('./elements/Login/Portal.Login'))
const SignUp = dynamic(() => import('./elements/SignUp/Portal.SignUp'))

export { Login, SignUp, Controller }
