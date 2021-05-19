/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { Field, FieldAttributes, useField } from 'formik';

interface ISelectProps {
  LeftIcon?: any;
  options: string[];
}

const Select: React.FC<FieldAttributes<ISelectProps>> = ({
  LeftIcon,
  options,
  className,
  ...props
}) => {
  const [field, , helpers] = useField(props.name);
  return (
    <div className="flex items-center ">
      {LeftIcon && (
        <i className="flex text-gray-400 ">
          <LeftIcon className="w-6 h-6 mx-3" />
        </i>
      )}

      <Listbox value={field.value} onChange={(e) => helpers.setValue(e)}>
        {({ open }) => (
          <div className="relative flex-grow ">
            <Listbox.Button className="relative block w-full">
              <Field
                as="div"
                className={clsx(
                  'block w-full px-2 flex items-center bg-gray-100 py-2.5 outline-none border-b-2 focus:ring-0 ',
                  className,
                  open ? 'border-black border-opacity-70' : 'border-gray-300',
                )}
                {...props}
              >
                <p className="font-semibold text-black text-opacity-60">
                  {field.value || props.placeholder}
                </p>
                <div className="flex-grow" />
                <i className="text-gray-400">
                  <ChevronDownIcon className="w-6 h-6 mx-3 " />
                </i>
              </Field>
            </Listbox.Button>
            <Transition
              show={open}
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded shadow-lg max-h-60"
              >
                {options.map((content, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active, selected }) =>
                      clsx(
                        'transition-all cursor-default px-2 duration-300  flex items-center  py-2',
                        active || selected
                          ? 'text-kgreen-800 bg-kgreen-100'
                          : 'text-black text-opacity-70 ',
                      )
                    }
                    value={content}
                  >
                    {({ selected }) => (
                      <>
                        <span className="block">{content}</span>
                        <span className="flex-grow" />
                        {selected && (
                          <span className="text-kgreen-500">
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
