/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import clsx from 'clsx';
import { Field, FieldAttributes, useField } from 'formik';

export interface InputCustomFields {
  LeftIcon?: any;
  RightIcon?: any;
  rightIconOnClick?: () => void;
  withError?: boolean;
}

const InputWithError: React.FC<FieldAttributes<InputCustomFields>> = ({
  children,
  withError = true,
  rightIconOnClick,
  LeftIcon,
  RightIcon,
  ...props
}) => {
  const [, { error, touched }] = useField(props);
  const showError = withError && touched && error;
  return (
    <div className="flex items-center pb-6 ">
      {LeftIcon && (
        <i
          className={clsx(
            'flex transition-colors duration-200',
            showError ? 'text-red-500 text-opacity-80' : 'text-gray-400 ',
          )}
        >
          <LeftIcon className="w-6 h-6 mx-3" />
        </i>
      )}
      <div
        className={clsx(
          'border-0 transition-all duration-200 relative flex-grow  border-b-2 border-gray-200  py-1',
          showError
            ? 'border-opacity-60 border-red-500 ring-0  '
            : 'focus-within:ring-0 focus-within:border-black focus-within:border-opacity-70',
        )}
      >
        <Field
          className={clsx(
            'block outline-none w-full px-2',
            showError && 'placeholder-red-500 text-red-500 text-opacity-80 placeholder-opacity-70',
          )}
          {...props}
        >
          {children}
        </Field>
        <p
          className={clsx(
            'absolute transition-colors w-full text-sm font-semibold text-left text-red-500 left-1.5 -bottom-6',
            showError ? 'text-opacity-90' : 'text-opacity-0',
          )}
        >
          {error || ''}
        </p>
      </div>

      {RightIcon && (
        <button
          type="button"
          onClick={rightIconOnClick}
          className={clsx(
            'flex ',
            rightIconOnClick && 'cursor-pointer',
            showError ? 'text-red-500 text-opacity-80' : 'text-gray-400 ',
          )}
        >
          <RightIcon className="w-6 h-6 mx-3 " />
        </button>
      )}
    </div>
  );
};

export default InputWithError;
