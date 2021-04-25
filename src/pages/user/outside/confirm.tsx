import React from 'react'
import * as Confirm from '@comp/pages/User/Outside/Confirm/exports'

interface IconfirmProps {}

const confirmPage: React.FC<IconfirmProps> = () => {
  return (
    <div className="min-h-screen ">
      <div className=" c-container">
        <Confirm.Controller />
      </div>
    </div>
  )
}

export default confirmPage
