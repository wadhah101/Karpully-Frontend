import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '@graphql/generated-types'
import { closeDialog } from '@utils/redux/slices/appSlice'
import { loginAction } from '@utils/redux/slices/authSlice'
import * as LoginFormData from './data'
import { MailIcon, KeyIcon } from '@heroicons/react/outline'
import * as Forms from '@comp/Forms/export'
import { useRouter } from 'next/dist/client/router'
import * as Dialogs from '../../exports'
import { formikErrorFactory } from '../../data'

const LoginDialogForm: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loginMutation, { data, called, error, loading }] = useLoginMutation()

  useEffect(() => {
    if (data) {
      const {
        login: { access_token, user, refresh_token },
      } = data
      dispatch(
        loginAction({
          accessToken: access_token,
          user: user,
          refreshToken: refresh_token,
        })
      )

      if (user.completedSignUp) {
        dispatch(closeDialog())
        router.push('/feed')
      }
    }
    return () => null
  }, [data])

  const onSumbit = (
    values: LoginFormData.FormValues
    // formikHelpers: FormikHelpers<LoginFormData.FormValues>
  ): void | Promise<any> => {
    const { username, password } = values
    loginMutation({ variables: { username: username.trim(), password } }).catch(
      () => null
    )
  }

  return (
    <Formik
      validationSchema={LoginFormData.validationSchema}
      onSubmit={onSumbit}
      initialValues={LoginFormData.initialValues}
    >
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="grid gap-5">
            <Forms.Input
              LeftIcon={MailIcon}
              id="username"
              name="username"
              placeholder="Username or Email "
            />
            <Forms.PasswordInput
              LeftIcon={KeyIcon}
              id="password"
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              disabled={loading || !isValid}
              className={clsx(
                'grid px-8 py-2.5 rounded bg-gradient-to-r font-bold place-items-center  ',
                (called && loading) || !isValid || data
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
                ...(error ? [error.message] : []),
              ]}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginDialogForm
