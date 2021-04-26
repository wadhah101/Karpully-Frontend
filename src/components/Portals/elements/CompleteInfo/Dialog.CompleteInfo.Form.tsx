/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import * as CompleteInfoFormData from './Dialog.CompleteInfo.data'
import { MailIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Forms from '../../../Forms/export'
import { useSignUpStage2Mutation } from '../../../../graphql/generated-types'
import { formikErrorFactory } from '../../Dialogs.data'
import * as Dialogs from '../../exports'
import { logout } from 'src/utils/redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const CompleteInfoDialogForm: React.FC = () => {
  const dispatch = useDispatch()

  const [signUpMutation, result] = useSignUpStage2Mutation()

  // useEffect(() => {
  //   if (result.called && !result.loading && !result.error) {
  //     const {
  //       data: {
  //         firstStageSignUp: { email },
  //       },
  //     } = result
  //     // dispatch(setSignUpEmail(email))
  //     // dispatch(openDialog('confirm'))
  //   }
  //   return () => null
  // }, [result])

  const onSumbit = (
    values: CompleteInfoFormData.FormValues
    // formikHelpers: FormikHelpers<LoginFormData.FormValues>
  ): void | Promise<any> => {
    // const { username, email, password } = values
    // signUpMutation({
    //   variables: {
    //     username,
    //     password,
    //     email,
    //   },
    // }).catch(() => null)
  }

  return (
    <Formik
      validationSchema={CompleteInfoFormData.validationSchema}
      onSubmit={onSumbit}
      initialValues={CompleteInfoFormData.initialValues}
    >
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="grid gap-5">
            <Forms.Input
              LeftIcon={UserCircleIcon}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <Forms.Input
              LeftIcon={MailIcon}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <Forms.Input
              LeftIcon={KeyIcon}
              id="age"
              name="age"
              placeholder="Age"
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
              Submit
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

export default CompleteInfoDialogForm
