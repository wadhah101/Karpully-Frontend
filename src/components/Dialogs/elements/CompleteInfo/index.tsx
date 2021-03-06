import React from 'react';

import { Dialog } from '@headlessui/react';

import { BaseDiagleProps } from '../../data';
import CompleteInfoDialogForm from './Form';
import useConfirmEmail from './useConfirmMail';

const CompleteInfoDialog: React.FC<BaseDiagleProps> = () => {
  // TODO handle errors and false values
  useConfirmEmail();

  return (
    <div className="relative w-[30rem] bg-white rounded">
      <div className="flex flex-col items-center p-6">
        <Dialog.Title as="h2" className="text-4xl font-extrabold text-black text-opacity-80">
          Mail Confirmed Succesfully!
        </Dialog.Title>
        <Dialog.Description as="h3" className="text-lg text-black text-opacity-50">
          Complete The Sign Up process to fully unlock your accounts
        </Dialog.Description>
        <div className="w-full mt-6 ">
          <CompleteInfoDialogForm />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CompleteInfoDialog;
