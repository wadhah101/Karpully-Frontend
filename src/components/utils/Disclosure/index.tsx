import { Disclosure, Transition } from '@headlessui/react';

const MyDisclosure: React.FC = () => (
  <Disclosure>
    <Disclosure.Button>Is team pricing available?</Disclosure.Button>

    <div className="scale-y-0" />
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Disclosure.Panel>
        <div className="bg-red-100 scal h-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium asperiores
          velit architecto sint nulla omnis, earum veniam ut dolorum ulam quos aut provident
          quisquam sequi a consequatur saepe qui!
        </div>
      </Disclosure.Panel>
    </Transition>
  </Disclosure>
);

export default MyDisclosure;
