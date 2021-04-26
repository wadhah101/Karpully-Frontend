/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  EmailExistsDocument,
  UserNameExistsDocument,
  UserNameExistsQuery,
  UserNameExistsQueryVariables,
} from './../../../../graphql/generated-types'
import {
  EmailExistsQuery,
  EmailExistsQueryVariables,
} from 'src/graphql/generated-types'
import { authLessClient } from 'src/utils/apollo'
import * as Yup from 'yup'

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
  return !a.data.existByEmailOrUsername
}

const userNameExists = async (username: string): Promise<boolean> => {
  const a = await authLessClient.query<
    UserNameExistsQuery,
    UserNameExistsQueryVariables
  >({ query: UserNameExistsDocument, variables: { username: username } })
  return !a.data.existByEmailOrUsername
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  username: Yup.string()
    .required()
    .test('u', 'username exists', (e) => {
      return e && userNameExists(e)
    }),

  email: Yup.string()
    .email()
    .required()
    .test('u2', 'email exists', (e) => e && emailExists(e)),
  password: Yup.string().required().min(6),
})
