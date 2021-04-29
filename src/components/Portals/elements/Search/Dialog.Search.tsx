import React from 'react'
import { BaseDiagleProps } from '../../Dialogs.data'
import SearchDialogForm from './Dialog.Search.Form'
import debounce from 'lodash/debounce'
import { useCarpoolsLazyQuery } from '@graphql/generated-types'

const SearchDialog: React.FC<BaseDiagleProps> = () => {
  const [current, setCurrent] = React.useState('')
  const onChange = debounce((e: string) => setCurrent(e), 200)

  // TODO use search query instead
  const [query, { data }] = useCarpoolsLazyQuery()

  React.useEffect(() => {
    console.debug({ current })
    query({ variables: { page: 1, limit: 8 } })
    return () => null
  }, [current])

  return (
    <div className="min-h-[18rem] w-[50rem] bg-white rounded">
      <div className="flex flex-col p-6">
        <SearchDialogForm onChange={onChange} />
      </div>

      <hr />
      <div className="p-6 max-h-[30rem] overflow-auto text-left">
        {current.trim() === '' ? (
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
                      <div className="h-16 transition-colors bg-white border rounded shadow-sm hover:bg-kgreen-100"></div>
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
                      <div className="h-16 transition-colors bg-white border rounded shadow-sm hover:bg-kgreen-100"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  )
}

export default SearchDialog
