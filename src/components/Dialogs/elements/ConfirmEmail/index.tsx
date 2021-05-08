import { APP_PORTALS, BaseDiagleProps } from '@comp/Dialogs/data'
import { Dialog } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { XIcon } from '@heroicons/react/outline'
import { closeDialog, openDialog } from 'src/utils/redux/slices/appSlice'
import { CoreState } from 'src/utils/redux/store'

const ConfirmMailDialog: React.FC<BaseDiagleProps> = ({ cancelButtonRef }) => {
  const dispatch = useDispatch()
  const email = useSelector<CoreState, string>(
    (state) => state.auth.signup.email
  )

  return (
    <div className="relative w-[40rem] bg-white rounded">
      <button
        ref={cancelButtonRef}
        onClick={() => dispatch(closeDialog())}
        className="absolute block text-black text-opacity-50 cursor-pointer top-6 left-6 "
      >
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <div className="flex flex-col items-center p-6">
        <Dialog.Title
          as="h2"
          className="text-4xl font-extrabold text-black text-opacity-80"
        >
          Just One More Step...
        </Dialog.Title>
        <Dialog.Description
          as="h3"
          className="mt-6 text-lg text-black text-opacity-50"
        >
          We have Sent email to&nbsp;
          <span className=" text-kgreen-500">{email}</span>
          &nbsp;to confirm the validity of your email adress. After receiving
          the email follow the link provided to complete your registration.
        </Dialog.Description>
      </div>

      <hr />

      <div className="flex flex-col items-center p-6">
        <p className="text-black text-opacity-80">
          If you don&apos;t see it, you can &nbsp;
          <span
            onClick={() => dispatch(openDialog(APP_PORTALS.Reset))}
            className="font-semibold text-green-500 cursor-pointer"
          >
            resend the confirmation email!
          </span>
        </p>
      </div>
    </div>
  )
}

export default ConfirmMailDialog
