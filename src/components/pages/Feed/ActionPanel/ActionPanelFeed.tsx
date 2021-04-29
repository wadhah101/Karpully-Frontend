import * as React from 'react'
import * as Forms from '@comp/Forms/export'
import { Form, Formik, useFormikContext } from 'formik'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'

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
    </div>
  )
}

export default ActionPanelFeed
