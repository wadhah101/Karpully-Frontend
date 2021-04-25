import React from 'react'

interface ConfirmMessage {}

const ConfirmMessage: React.FC<ConfirmMessage> = () => {
  return (
    <div className="">
      <h1 className="mb-3 text-3xl font-bold text-kgreen-500 ">
        Mail Confirmed Succesfully!
      </h1>
      <p className="text-lg font-semibold text-black text-opacity-75">
        Complete The Sign Up process to fully unlock your accounts
      </p>
    </div>
  )
}

export default ConfirmMessage
