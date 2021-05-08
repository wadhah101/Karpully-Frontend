import React from 'react'
import { BaseDiagleProps } from '../../data'
import SearchDialogForm from './Form'
import debounce from 'lodash/debounce'
import { useCarpoolsLazyQuery } from '@graphql/generated-types'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { closeDialog } from '@utils/redux/slices/appSlice'

const SearchDialog: React.FC<BaseDiagleProps> = () => {
  const [current, setCurrent] = React.useState('')
  const onChange = debounce((e: string) => setCurrent(e), 200)

  const dispatch = useDispatch()
  // TODO use search query instead
  const [query, { data }] = useCarpoolsLazyQuery()

  React.useEffect(() => {
    console.debug({ current })
    query({ variables: { page: 1, limit: 8 } })
    return () => null
  }, [current])

  return (
    <div className="w-[50rem] bg-white rounded">
      <div className="flex flex-col p-6">
        <SearchDialogForm onChange={onChange} />
      </div>

      <hr />
      <div className="p-6 min-h-[15rem] max-h-[33rem] overflow-auto text-left">
        {!current.trim() ? (
          <p className="text-black text-opacity-50"> No recent searches </p>
        ) : (
          data && (
            <React.Fragment>
              <div>
                <h3 className="font-bold text-black text-opacity-70">
                  Going To
                </h3>
                <ul className="grid gap-2 mt-3">
                  {data.carpools.items.slice(0, 4).map((e) => (
                    <li key={e.id}>
                      <div className="h-16 transition-colors bg-white border rounded shadow-sm hover:bg-gray-100"></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mt-6 font-bold text-black text-opacity-70 ">
                  Going From
                </h3>
                <ul className="grid gap-2 mt-3">
                  {data.carpools.items.slice(0, 4).map((e) => (
                    <li key={e.id}>
                      <div className="h-16 transition-colors bg-white border rounded shadow-sm hover:bg-gray-100"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          )
        )}
      </div>
      {current.trim() && (
        <React.Fragment>
          <hr />
          <div className="p-6 text-left ">
            <Link
              passHref
              href={{
                pathname: '/carpools/search',
                query: { q: current },
              }}
            >
              <a
                className="font-semibold hover:underline text-kgreen-500 "
                onClick={() => dispatch(closeDialog())}
              >
                See all results
              </a>
            </Link>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default SearchDialog
