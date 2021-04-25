import React from 'react'
import ConfirmForm from './Confirm.Form'
import ConfirmMessage from './Confirm.Message'

const ConfirmController: React.FC = () => {
  return (
    <div className="p-6 mt-20 bg-white rounded shadow ">
      <ConfirmMessage />
      <ConfirmForm />
    </div>
  )
}

export default ConfirmController
