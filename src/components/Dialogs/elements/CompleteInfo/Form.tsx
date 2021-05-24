import React, { useEffect } from 'react';

import { UserCircleIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from 'src/utils/redux/slices/appSlice';
import { updateUserAction } from 'src/utils/redux/slices/authSlice';
import { GlobalState } from 'src/utils/redux/store';

import { User, useSignUpStage2Mutation } from '../../../../graphql/generated-types';
import * as Forms from '../../../Forms/export';
import * as Dialogs from '../../exports';
import { BASE_FORM_CLASSES } from '../shared';
import * as CompleteInfoFormData from './data';

const CompleteInfoDialogForm: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector<GlobalState, Partial<User>>((state) => state.auth.user);

  const [signUpMutation, { data, loading, error, called }] = useSignUpStage2Mutation();

  useEffect(() => {
    if (data) {
      dispatch(updateUserAction(data.secondStageSignUp));
      dispatch(closeDialog());
    }
    return () => null;
  }, [data]);

  const onSumbit = (values: CompleteInfoFormData.FormValues): void | Promise<any> => {
    const { firstName, lastName, age, gender, phone } = values;
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
    }).catch(() => null);
  };

  return (
    <Formik
      validationSchema={CompleteInfoFormData.validationSchema}
      onSubmit={onSumbit}
      initialValues={CompleteInfoFormData.initialValues}
    >
      {({ isValid }) => (
        <Form>
          <div className={BASE_FORM_CLASSES}>
            <Forms.InputWithError id="firstName" name="firstName" placeholder="First Name" />
            <Forms.InputWithError id="lastName" name="lastName" placeholder="Last Name" />
            <Forms.InputWithError id="phone" name="phone" placeholder="Phone" />
            <Forms.InputWithError id="age" name="age" placeholder="Age" />
            <div className="">
              <Forms.Select
                options={['Male', 'Female']}
                id="gender"
                name="gender"
                placeholder="Gender"
              />
            </div>

            <div className="mt-2">
              <Forms.FileUpload
                RightIcon={UserCircleIcon}
                name="profilePicture"
                id="profilePicture"
                placeholder="Please Choose Profile Picture"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !isValid || !!data}
              className={clsx(
                'grid px-8 py-2.5 mt-3 rounded bg-gradient-to-r font-bold place-items-center  ',
                (called && loading) || !isValid || !!data
                  ? 'from-kgreen-200 to-kgreen-200  text-gray-50'
                  : 'from-kgreen-600 to-kgreen-500 text-white',
              )}
            >
              Submit
            </button>
            <div className="">
              <Dialogs.SmallText error data={[...(error ? [error.message] : [])]} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CompleteInfoDialogForm;
