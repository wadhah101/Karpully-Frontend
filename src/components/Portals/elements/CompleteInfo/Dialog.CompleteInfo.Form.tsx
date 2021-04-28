import clsx from 'clsx'
import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import * as CompleteInfoFormData from './Dialog.CompleteInfo.data'
import * as Forms from '../../../Forms/export'
import {
  User,
  useSignUpStage2Mutation,
} from '../../../../graphql/generated-types'
import { formikErrorFactory } from '../../Dialogs.data'
import * as Dialogs from '../../exports'
import { updateUserAction } from 'src/utils/redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CoreState } from 'src/utils/redux/store'
import { closeDialog } from 'src/utils/redux/slices/appSlice'

// TODO add profile picture
const CompleteInfoDialogForm: React.FC = () => {
  const dispatch = useDispatch()

  const user = useSelector<CoreState, Partial<User>>((state) => state.auth.user)

  const [signUpMutation, result] = useSignUpStage2Mutation()

  useEffect(() => {
    if (result.data) {
      dispatch(updateUserAction(result.data.secondStageSignUp))
      dispatch(closeDialog())
    }
    return () => null
  }, [result.data])

  const onSumbit = (
    values: CompleteInfoFormData.FormValues
  ): void | Promise<any> => {
    const { firstName, lastName, age, gender, phone } = values
    signUpMutation({
      variables: {
        firstName,
        lastName,
        age: Number(age),
        gender: gender === 'Male' ? 0 : 1,
        localization: 'tunis',
        id: user.id,
        telNumber: phone,
      },
    }).catch(() => null)
  }

  return (
    <Formik
      validationSchema={CompleteInfoFormData.validationSchema}
      onSubmit={onSumbit}
      initialValues={CompleteInfoFormData.initialValues}
    >
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="grid gap-4">
            <Forms.Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <Forms.Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <Forms.Input id="phone" name="phone" placeholder="Phone" />
            <Forms.Input id="age" name="age" placeholder="Age" />
            <div className="mt-2">
              <Forms.Select
                options={['Male', 'Female']}
                id="gender"
                name="gender"
                placeholder="Gender"
              />
            </div>

            <button
              type="submit"
              disabled={result.loading || !isValid || !!result.data}
              className={clsx(
                'grid px-8 py-2.5 mt-2 rounded bg-gradient-to-r font-bold place-items-center  ',
                (result.called && result.loading) || !isValid || !!result.data
                  ? 'from-kgreen-200 to-kgreen-200  text-gray-50'
                  : 'from-kgreen-600 to-kgreen-500 text-white'
              )}
            >
              Submit
            </button>
            <div className="">
              <Dialogs.SmallText
                error={true}
                data={[
                  ...formikErrorFactory(touched, errors),
                  ...(result.error ? [result.error.message] : []),
                ]}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CompleteInfoDialogForm
