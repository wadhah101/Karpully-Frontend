import * as React from 'react';

interface IHomeSocialElementProps {
  data: any;
}

const imageId = 'IuJc2qh2TcA';

const HomeSocialElement: React.FunctionComponent<IHomeSocialElementProps> = () => (
  <div className="flex flex-col items-center h-full p-3 text-center border shadow ">
    <img
      alt="user"
      src={`https://source.unsplash.com/${imageId}/100x100`}
      className="w-10 h-10 overflow-hidden rounded-full"
    />
    <h3 className="mt-1 text-sm font-semibold text-black text-opacity-50"> Lorem, ipsum dolor. </h3>
    <p className="mt-1 text-black text-opacity-75 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat dignissimos il
    </p>
  </div>
);

export default HomeSocialElement;
