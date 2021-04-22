import { EyeIcon } from '@heroicons/react/outline'
import { FieldAttributes } from 'formik'
import React, { useState } from 'react'
import Input, { InputCustomFields } from './Input'

const PasswordInput: React.FC<
  FieldAttributes<Omit<InputCustomFields, 'RightIcon'>>
> = (props) => {
  const [showPassword, setshowPassword] = useState(false)

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      RightIcon={EyeIcon}
      rightIconOnClick={() => setshowPassword((e) => !e)}
    />
  )
}

export default PasswordInput
