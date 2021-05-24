/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { FieldAttributes } from 'formik';

interface IFileUploadProps {
  RightIcon?: any;
}

// TODO add logic
const FileUpload: React.FC<FieldAttributes<IFileUploadProps>> = ({
  RightIcon,
  placeholder,
  ...props
}) => (
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
    <input type="file" id={props.id} name={props.name} hidden />
  </label>
);

export default FileUpload;
