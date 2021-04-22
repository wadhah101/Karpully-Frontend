import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../../../graphql/generated-types'
import { login } from '../../../../utils/redux/slices/authSlice'
import * as SignUpFormData from './Portal.Login.Form.data'
import { MailIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Forms from '../../../../components/Forms/export'

// TODO complete sign up process elsewhere
const SignUpPortalForm: React.FC = () => {
  const dispatch = useDispatch()
  const [loginMutation, result] = useLoginMutation()

  useEffect(() => {
    if (result.called && !result.loading && !result.error) {
      const {
        data: {
          login: { access_token, user },
        },
      } = result
      dispatch(login({ token: access_token, user: user }))
      // dispatch(closePortal())
      // TODO add check your mail message
    }
    return () => null
  }, [result])

  const onSumbit = (
    values: SignUpFormData.FormValues
    // formikHelpers: FormikHelpers<LoginFormData.FormValues>
  ): void | Promise<any> => {
    const { username, password } = values
    loginMutation({ variables: { username, password } }).catch(() => null)
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
              id="username"
              name="username"
              placeholder="Username"
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
              disabled={result.loading || !isValid}
              className={clsx(
                'grid px-8 py-2.5 rounded bg-gradient-to-r font-bold place-items-center  ',
                (result.called && result.loading) || !isValid || result.data
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
            {touched.username && errors.username && <p> {errors.username} </p>}
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

export default SignUpPortalForm
