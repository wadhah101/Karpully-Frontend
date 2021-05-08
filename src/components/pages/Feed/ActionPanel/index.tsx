import * as React from 'react'
import * as Forms from '@comp/Forms/export'
import { Form, Formik, useFormikContext } from 'formik'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { openDialog } from '@utils/redux/slices/appSlice'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { APP_PORTALS } from '@comp/Dialogs/data'

interface IFriendsPanelFeedProps {}

// TODO search for better solution
const Auto = ({ onChange }) => {
  const {
    values: { search },
  } = useFormikContext<{ search: string }>()
  React.useEffect(() => {
    onChange(search)
    return () => null
  }, [search])

  return null
}

const ActionPanelFeed: React.FunctionComponent<IFriendsPanelFeedProps> = () => {
  const [current, setCurrent] = React.useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col bg-white border rounded shadow ">
      <Formik onSubmit={() => null} initialValues={{ search: '' }}>
        <div className="px-3 py-6">
          <Form>
            <Forms.Input
              id="search"
              name="search"
              rightIconOnClick={() => {
                router.push(`/carpools/search?q=${current}`)
              }}
              RightIcon={SearchIcon}
              placeholder="Search"
            />
            <Auto onChange={setCurrent} />
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
