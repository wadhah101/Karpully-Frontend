import {
  EmailExistsDocument,
  UserNameExistsDocument,
  UserNameExistsQuery,
  UserNameExistsQueryVariables,
} from '../../../../graphql/generated-types'
import {
  EmailExistsQuery,
  EmailExistsQueryVariables,
} from 'src/graphql/generated-types'
import { authLessClient } from 'src/utils/apollo/useApolloClient'
import * as Yup from 'yup'
import debounce from 'lodash/debounce'
import * as Forms from '@comp/Forms/export'

export interface FormValues {
  username: string
  email: string
  password: string
}
export const initialValues: FormValues = {
  username: '',
  email: '',
  password: '',
}

const emailExists = async (email: string): Promise<boolean> => {
  const a = await authLessClient.query<
    EmailExistsQuery,
    EmailExistsQueryVariables
  >({ query: EmailExistsDocument, variables: { email: email } })
  return !a.data.existByEmail
}

const userNameExists = async (username: string): Promise<boolean> => {
  const a = await authLessClient.query<
    UserNameExistsQuery,
    UserNameExistsQueryVariables
  >({ query: UserNameExistsDocument, variables: { username: username } })
  return !a.data.existByUsername
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  username: Yup.string()
    .required(Forms.Messsages.REQUIRED)
    .test(
      'u',
      'username exists',
      debounce((e) => e && userNameExists(e), 300)
    ),

  email: Yup.string()
    .email()
    .required(Forms.Messsages.REQUIRED)
    .test(
      'u2',
      'email exists',
      debounce((e) => e && emailExists(e), 300)
    ),
  password: Yup.string()
    .required(Forms.Messsages.REQUIRED)
    .min(6, Forms.Messsages.PASSWORD_MIN),
})
