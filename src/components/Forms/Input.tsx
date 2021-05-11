import clsx from 'clsx'
import { Field, FieldAttributes } from 'formik'
import React from 'react'

export interface InputCustomFields {
  LeftIcon?: any
  RightIcon?: any
  rightIconOnClick?: () => void
}

const Input: React.FC<FieldAttributes<InputCustomFields>> = ({
  className,
  children,
  rightIconOnClick,
  LeftIcon,
  RightIcon,
  ...props
}) => (
  <div className="flex items-center ">
    {LeftIcon && (
      <i className="flex text-gray-400 ">
        <LeftIcon className="w-6 h-6 mx-3" />
      </i>
    )}
    <Field
      className={clsx(
        'mt-0 block w-full px-2 py-1 border-0 outline-none border-b-2 border-gray-200 focus:ring-0 focus:border-black focus:border-opacity-70',
        className
      )}
      {...props}
    >
      {children}
    </Field>
    {RightIcon && (
      <i
        onClick={rightIconOnClick}
        className={clsx('text-gray-400 ', rightIconOnClick && 'cursor-pointer')}
      >
        <RightIcon className="w-6 h-6 mx-3 " />
      </i>
    )}
  </div>
)

export default Input
