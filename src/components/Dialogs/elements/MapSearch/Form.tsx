import { Form, Formik } from 'formik'
import * as React from 'react'
import * as Forms from '@comp/Forms/export'
import { SearchIcon } from '@heroicons/react/outline'
import OnChangeBind from '@comp/Forms/OnChangeBind'

interface ISearchDialogFormProps {
  onChange: (e: string) => void
}

const initialValues = { search: '' }

const MapSearchDialogForm: React.FunctionComponent<ISearchDialogFormProps> = ({
  onChange,
}) => {
  return (
    <Formik onSubmit={() => null} initialValues={initialValues}>
      <Form>
        <Forms.Input
          id="search"
          name="search"
          RightIcon={SearchIcon}
          placeholder="Ex. Ben Arous, Fouchena"
        />
        <OnChangeBind
          cls={initialValues}
          onChange={({ search }) => onChange(search)}
        />
      </Form>
    </Formik>
  )
}

export default MapSearchDialogForm
