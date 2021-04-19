import React from 'react'
// import { gql } from '@apollo/client'

interface IHeaderLogoProps {}

// const gqp = gql``

const HeaderLogo: React.FC<IHeaderLogoProps> = () => {
  return (
    <div>
      <img src="/logo/logo.svg" className="h-14 " />
    </div>
  )
}

export default HeaderLogo
