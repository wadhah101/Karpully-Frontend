import { Form, Formik } from 'formik'
import * as React from 'react'
import * as Forms from '@comp/Forms/export'
import { SearchIcon } from '@heroicons/react/outline'

interface ISearchDialogFormProps {
  onChange: (string) => void
}

const SearchDialogForm: React.FunctionComponent<ISearchDialogFormProps> = ({
  onChange,
}) => {
  return (
    <Formik onSubmit={() => null} initialValues={{ search: '' }}>
      {({ values: { search } }) => (
        <Form onChange={() => onChange(search)}>
          <Forms.Input
            id="search"
            name="search"
            RightIcon={SearchIcon}
            placeholder="Ex. Ben Arous, Fouchena"
          />
        </Form>
      )}
    </Formik>
  )
}

export default SearchDialogForm
