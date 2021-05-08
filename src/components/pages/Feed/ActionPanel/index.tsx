import * as React from 'react'
import * as Forms from '@comp/Forms/export'
import { Form, Formik } from 'formik'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { openDialog } from '@utils/redux/slices/appSlice'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { APP_PORTALS } from '@comp/Dialogs/data'

import OnChangeBind from '@comp/Forms/OnChangeBind'

interface IFriendsPanelFeedProps {}
const initialValues = { search: '' }

const ActionPanelFeed: React.FunctionComponent<IFriendsPanelFeedProps> = () => {
  const [current, setCurrent] = React.useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col bg-white border rounded shadow ">
      <Formik onSubmit={() => null} initialValues={initialValues}>
        <div className="px-3 py-6">
          <Form>
            <Forms.Input
              id="search"
              name="search"
              rightIconOnClick={() =>
                current.trim() && router.push(`/carpools/search?q=${current}`)
              }
              RightIcon={SearchIcon}
              placeholder="Search"
            />
            <OnChangeBind
              cls={initialValues}
              onChange={({ search }) => setCurrent(search)}
            />
          </Form>
        </div>
      </Formik>
      <div className="px-3 pb-4">
        <button
          onClick={() => dispatch(openDialog(APP_PORTALS.MapSearch))}
          className=" flex w-full  items-center justify-center   py-2.5 text-white rounded bg-gradient-to-r from-kgreen-600  font-bold shadow  to-kgreen-500 "
        >
          Search With Map
          <div>
            <LocationMarkerIcon className="w-5 h-5 ml-2 " />
          </div>
        </button>
      </div>
    </div>
  )
}

export default ActionPanelFeed
