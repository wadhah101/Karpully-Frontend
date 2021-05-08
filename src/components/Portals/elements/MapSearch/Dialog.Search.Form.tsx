import { Form, Formik, useFormikContext } from 'formik'
import * as React from 'react'
import * as Forms from '@comp/Forms/export'
import { SearchIcon } from '@heroicons/react/outline'

interface ISearchDialogFormProps {
  onChange: (string) => void
}

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

const MapSearchDialogForm: React.FunctionComponent<ISearchDialogFormProps> = ({
  onChange,
}) => {
  return (
    <Formik onSubmit={() => null} initialValues={{ search: '' }}>
      <Form>
        <Forms.Input
          id="search"
          name="search"
          RightIcon={SearchIcon}
          placeholder="Ex. Ben Arous, Fouchena"
        />
        <Auto onChange={onChange} />
      </Form>
    </Formik>
  )
}

export default MapSearchDialogForm
