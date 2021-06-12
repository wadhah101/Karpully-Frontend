/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { FieldAttributes } from 'formik';

interface IFileUploadProps {
  RightIcon?: any;
  onChange: (e: FileList) => void;
}

// TODO add logic
const FileUpload: React.FC<FieldAttributes<IFileUploadProps>> = ({
  RightIcon,
  placeholder,
  onChange,
  ...props
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <label
      className="flex items-center  py-2.5 px-2 text-black bg-gray-100 border-b-2 border-gray-300 text-opacity-60"
      htmlFor={props.id}
    >
      <p className="flex-grow font-semibold text-left "> {placeholder} </p>
      {RightIcon && (
        <div className="flex ">
          <RightIcon className="w-6 h-6 mx-3" />
        </div>
      )}
      <input
        ref={ref}
        onChange={() => onChange(ref.current.files)}
        type="file"
        id={props.id}
        name={props.name}
        hidden
      />
    </label>
  );
};

export default FileUpload;
