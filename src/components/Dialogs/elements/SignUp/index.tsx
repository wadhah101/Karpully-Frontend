import React from 'react';

import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';

import { closeDialog, openDialog } from '../../../../utils/redux/slices/appSlice';
import { AppPortals, BaseDiagleProps } from '../../data';
import SignUpDialogForm from './Form';

const SignUpDialog: React.FC<BaseDiagleProps> = ({ cancelButtonRef }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative w-[30rem] bg-white rounded">
      <button
        type="button"
        ref={cancelButtonRef}
        onClick={() => dispatch(closeDialog())}
        className="absolute block text-black text-opacity-50 cursor-pointer top-6 left-6 "
      >
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <div className="flex flex-col items-center p-6">
        <Dialog.Title as="h2" className="text-4xl font-extrabold text-black text-opacity-80">
          Join Karpully
        </Dialog.Title>
        <Dialog.Description as="h3" className="text-lg text-black text-opacity-50">
          Sign up to start your journey
        </Dialog.Description>
        <div className="w-full mt-6 ">
          <SignUpDialogForm />
        </div>
      </div>

      <hr />

      <div className="flex flex-col items-center p-6">
        <p className="text-black text-opacity-80">
          Already registered ?&nbsp;
          <button
            type="button"
            onClick={() => dispatch(openDialog(AppPortals.Login))}
            className="font-semibold text-green-500 cursor-pointer "
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpDialog;
