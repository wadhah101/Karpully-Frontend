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
  <div className="flex items-center rounded ring">
    {LeftIcon && (
      <i className="flex text-gray-400 ">
        <LeftIcon className="w-6 h-6 mx-3" />
      </i>
    )}
    <Field className={clsx('flex w-full p-2.5 ', className)} {...props}>
      {children}
    </Field>
    {RightIcon && (
      <i
        onClick={rightIconOnClick}
        className={clsx(
          'flex items-center self-stretch text-gray-400 ',
          rightIconOnClick && 'cursor-pointer'
        )}
      >
        <RightIcon className="w-6 h-6 mx-3 " />
      </i>
    )}
  </div>
)

export default Input
