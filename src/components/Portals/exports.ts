import Controller from './Dialogs.controller'
import dynamic from 'next/dynamic'
import SmallText from './Dialog.util.smallText'

const Login = dynamic(() => import('./elements/Login/Dialog.Login'))
const SignUp = dynamic(() => import('./elements/SignUp/Dialog.SignUp'))

export { Login, SignUp, Controller, SmallText }
