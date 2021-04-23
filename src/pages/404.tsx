import React from 'react'

const ErrorNotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className=" w-44 h-44"
        alt="stop image"
        src="/assets/icons/stop.svg"
      />
      <h1 className="mt-4 font-bold text-center text-8xl">
        404
        <br /> <p className="text-4xl"> PAGE NOT FOUND</p>
      </h1>
    </div>
  )
}

export default ErrorNotFoundPage
