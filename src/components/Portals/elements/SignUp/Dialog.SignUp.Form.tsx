import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React from 'react'
import * as SignUpFormData from './Dialog.SignUp.Form.data'
import { MailIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Forms from '../../../Forms/export'
import { useSignUpStage1Mutation } from '../../../../graphql/generated-types'
import { formikErrorFactory } from '../../Dialogs.data'
import * as Dialogs from '../../exports'

// TODO complete sign up process elsewhere
const SignUpDialogForm: React.FC = () => {
  const [signUpMutation, result] = useSignUpStage1Mutation()
  const onSumbit = (
    values: SignUpFormData.FormValues
    // formikHelpers: FormikHelpers<LoginFormData.FormValues>
  ): void | Promise<any> => {
    const { username, email, password } = values
    signUpMutation({
      variables: {
        username,
        password,
        email,
      },
    }).catch(() => null)
  }

  return (
    <Formik
      validationSchema={SignUpFormData.validationSchema}
      onSubmit={onSumbit}
      initialValues={SignUpFormData.initialValues}
    >
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="grid gap-5">
            <Forms.Input
              LeftIcon={UserCircleIcon}
              id="username"
              name="username"
              placeholder="Username"
            />
            <Forms.Input
              LeftIcon={MailIcon}
              id="email"
              name="email"
              placeholder="Email"
            />
            <Forms.PasswordInput
              LeftIcon={KeyIcon}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              disabled={result.loading || !isValid || !!result.data}
              className={clsx(
                'grid px-8 py-2.5 rounded bg-gradient-to-r font-bold place-items-center  ',
                (result.called && result.loading) || !isValid || !!result.data
                  ? 'from-kgreen-200 to-kgreen-200  text-gray-50'
                  : 'from-kgreen-600 to-kgreen-500 text-white'
              )}
            >
              Login
            </button>
            <Dialogs.SmallText
              error={true}
              data={[
                ...formikErrorFactory(touched, errors),
                ...(result.error ? [result.error.message] : []),
              ]}
            />
            <Dialogs.SmallText
              data={[
                ...(result.data
                  ? ['Please confirm your email to complete your sign up']
                  : []),
              ]}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpDialogForm
