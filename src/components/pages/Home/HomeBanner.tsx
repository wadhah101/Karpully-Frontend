import React from 'react'

interface IHomeBannerProps {}

const HomeBanner: React.FC<IHomeBannerProps> = () => {
  return (
    <div className="grid h-screen grid-cols-2">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea
        possimus nesciunt temporibus asperiores, nisi suscipit repellat error
        voluptate quasi enim eius ipsum expedita sint exercitationem blanditiis
        magni? Velit, ad?
      </div>
      <div className="text-white bg-kgray-900 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda
        consectetur, minima pariatur cum impedit iure quidem libero omnis,
        adipisci ea fugit porro deserunt nostrum repellendus explicabo harum
        molestias natus.
      </div>
    </div>
  )
}

export default HomeBanner
