import * as React from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

interface IHomeFaqElementProps {
  data: { question: string; answer: string };
}

const HomeFaqElement: React.FunctionComponent<IHomeFaqElementProps> = ({
  data: { question, answer },
}) => (
  <div className="mb-6 border-b border-black md:text-lg border-opacity-10">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="block w-full text-left ">
            <div className="flex items-center p-3 text-black text-opacity-70 bg-opacity-30">
              <h3 className="flex-grow font-semibold ">{question}</h3>
              <div className={clsx('transform', open ? 'rotate-180' : 'rotate-0')}>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </div>
          </Disclosure.Button>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static>
              <p className="px-3 py-6 text-base text-black text-opacity-70 ">{answer}</p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  </div>
);

export default HomeFaqElement;
