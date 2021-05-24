import React, { useRef, Fragment } from 'react';

import { Transition, Dialog } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';

import { closeDialog } from '../../utils/redux/slices/appSlice';
import { GlobalState } from '../../utils/redux/store';
import { AppPortals, BLOCKED_PORTALS, PORTALS_WITH_DATA } from './data';

const DialogsController: React.FC = () => {
  const portal = useSelector<GlobalState, { current: AppPortals; show: boolean }>(
    (state) => state.app.portal,
  );
  const dispatch = useDispatch();
  const cancelButtonRef = useRef<HTMLButtonElement>();

  if (portal.current === null) return null;
  const Comp = PORTALS_WITH_DATA.find((e) => e[0] === portal.current)[1]();

  return (
    <Transition show={portal.show} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        static
        open={portal.show}
        onClose={() => {
          if (!BLOCKED_PORTALS.find((e) => e === portal.current)) dispatch(closeDialog());
        }}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-hidden align-middle transition-all transform ">
              <Comp cancelButtonRef={cancelButtonRef} />
              <button type="button" className="text-transparent bg-transparent">
                r
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogsController;
