import React, { useEffect, useState } from 'react';

import { UserCircleIcon } from '@heroicons/react/outline';
import useAxiosClient from '@utils/axios/useAxiosClient';
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
  const axios = useAxiosClient();

  const user = useSelector<GlobalState, Partial<User>>((state) => state.auth.user);

  const [profilePicture, setProfilePicture] = useState<FileList>(null);

  const [signUpMutation, { data: mutationData, loading, error, called }] =
    useSignUpStage2Mutation();

  useEffect(() => {
    if (mutationData) {
      dispatch(updateUserAction(mutationData.secondStageSignUp));
      dispatch(closeDialog());
    }
    return () => null;
  }, [mutationData]);

  const onSumbit = async (values: CompleteInfoFormData.FormValues): Promise<any> => {
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

    //  TODO upload profile picture
    if (profilePicture) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      const formData = new FormData();
      formData.append('image', profilePicture[0], profilePicture[0].name);
      axios.post('/profile-img-upload', formData);
    }
  };

  useEffect(() => {
    if (profilePicture) {
      const formData = new FormData();
      formData.append('image', profilePicture[0], profilePicture[0].name);
      axios.post('/profile-img-upload', formData);
    }
    return () => null;
  }, [profilePicture]);

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
                onChange={(e) => {
                  setProfilePicture(e);
                }}
                RightIcon={UserCircleIcon}
                name="profilePicture"
                id="profilePicture"
                placeholder={
                  profilePicture ? profilePicture[0].name : 'Please Choose Profile Picture'
                }
              />
            </div>

            <button
              type="submit"
              disabled={loading || !isValid || !!mutationData}
              className={clsx(
                'grid px-8 py-2.5 mt-3 rounded bg-gradient-to-r font-bold place-items-center  ',
                (called && loading) || !isValid || !!mutationData
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
