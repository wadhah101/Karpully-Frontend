/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { EyeIcon } from '@heroicons/react/outline';
import { FieldAttributes } from 'formik';

import InputWithError, { InputCustomFields } from './InputWithError';

const PasswordInput: React.FC<FieldAttributes<Omit<InputCustomFields, 'RightIcon'>>> = (props) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <InputWithError
      {...props}
      type={showPassword ? 'text' : 'password'}
      RightIcon={EyeIcon}
      rightIconOnClick={() => setshowPassword((e) => !e)}
    />
  );
};

export default PasswordInput;
