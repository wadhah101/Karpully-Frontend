import Controller from './Dialogs.controller'
import dynamic from 'next/dynamic'
import SmallText from './Dialog.util.smallText'
import Confirm from './elements/ConfirmEmail/Dialog.ConfirmMail'

const Login = dynamic(() => import('./elements/Login/Dialog.Login'))
const SignUp = dynamic(() => import('./elements/SignUp/Dialog.SignUp'))
const Search = dynamic(() => import('./elements/Search/Dialog.Search'))
const CompleteInfo = dynamic(
  () => import('./elements/CompleteInfo/Dialog.CompleteInfo')
)

export { Confirm, Login, SignUp, Search, Controller, SmallText, CompleteInfo }
