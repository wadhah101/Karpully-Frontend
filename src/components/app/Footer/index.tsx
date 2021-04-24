import React from 'react'
import Logo from '../../../../public/logo/logo.svg'

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className="text-white bg-kgreen-900">
      <div className="py-20 c-container">
        <div>
          <Logo />
        </div>
      </div>
    </div>
  )
}
