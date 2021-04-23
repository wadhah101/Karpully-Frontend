import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useSignupMutation } from '../../../../graphql/generated-types'
import * as SignUpFormData from './Dialog.SignUp.Form.data'
import { MailIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Forms from '../../../Forms/export'

// TODO complete sign up process elsewhere
const SignUpDialogForm: React.FC = () => {
  const [signUpMutation, result] = useSignupMutation()

  useEffect(() => {
    if (result.called && !result.loading && !result.error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const a = result.data.createUser.id
      // dispatch(closePortal())
      // TODO add check your mail message
    }
    return () => null
  }, [result])

  const onSumbit = (
    values: SignUpFormData.FormValues
    // formikHelpers: FormikHelpers<LoginFormData.FormValues>
  ): void | Promise<any> => {
    const { email: username, password, fullName } = values
    signUpMutation({
      variables: {
        username: username.trim(),
        password,
        firstname: fullName.trim(),
        lastname: '',
        age: 20,
        email: '',
        localization: '',
        telNumber: '',
        gender: 0,
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
              id="fullName"
              name="fullName"
              placeholder="Full Name"
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
          </div>

          {/* TODO POP UP  */}
          <div className="text-sm font-semibold text-center text-red-400 ">
            {result.error && <p> {result.error.message} </p>}
            {touched.password && errors.password && <p> {errors.password} </p>}
            {touched.email && errors.email && <p> {errors.email} </p>}
          </div>
          {result.data && (
            <p className="text-sm text-center text-kgreen-400">
              Please confirm your email to complete your sign up
            </p>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default SignUpDialogForm
