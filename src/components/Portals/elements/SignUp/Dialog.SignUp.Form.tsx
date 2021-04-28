import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import * as SignUpFormData from './Dialog.SignUp.Form.data'
import { MailIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Forms from '../../../Forms/export'
import { useSignUpStage1Mutation } from '../../../../graphql/generated-types'
import { formikErrorFactory } from '../../Dialogs.data'
import * as Dialogs from '../../exports'
import { useDispatch } from 'react-redux'
import { openDialog } from 'src/utils/redux/slices/appSlice'
import { setSignUpEmail } from 'src/utils/redux/slices/authSlice'

const SignUpDialogForm: React.FC = () => {
  const dispatch = useDispatch()
  const [
    signUpMutation,
    { data, error, called, loading },
  ] = useSignUpStage1Mutation()

  useEffect(() => {
    if (data) {
      const {
        firstStageSignUp: { email },
      } = data
      dispatch(setSignUpEmail(email))
      dispatch(openDialog('confirm'))
    }
    return () => null
  }, [data])

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
              disabled={loading || !isValid || !!data}
              className={clsx(
                'grid px-8 py-2.5 rounded bg-gradient-to-r font-bold place-items-center  ',
                (called && loading) || !isValid || !!data
                  ? 'from-kgreen-200 to-kgreen-200  text-gray-50'
                  : 'from-kgreen-600 to-kgreen-500 text-white'
              )}
            >
              Sign Up
            </button>
            <Dialogs.SmallText
              error={true}
              data={[
                ...formikErrorFactory(touched, errors),
                ...(error ? [error.message] : []),
              ]}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpDialogForm
