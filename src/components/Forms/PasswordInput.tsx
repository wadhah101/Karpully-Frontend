import { EyeIcon } from '@heroicons/react/outline'
import { FieldAttributes } from 'formik'
import React, { useState } from 'react'
import InputWithError, { InputCustomFields } from './InputWithError'

const PasswordInput: React.FC<
  FieldAttributes<Omit<InputCustomFields, 'RightIcon'>>
> = (props) => {
  const [showPassword, setshowPassword] = useState(false)

  return (
    <InputWithError
      {...props}
      type={showPassword ? 'text' : 'password'}
      RightIcon={EyeIcon}
      rightIconOnClick={() => setshowPassword((e) => !e)}
    />
  )
}

export default PasswordInput
