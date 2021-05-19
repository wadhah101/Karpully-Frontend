import * as React from 'react';

import * as Forms from '@comp/Forms/export';
import OnChangeBind from '@comp/Forms/OnChangeBind';
import { SearchIcon } from '@heroicons/react/outline';
import { Form, Formik } from 'formik';

interface ISearchDialogFormProps {
  onChange: (e: string) => void;
}

const initialValues = { search: '' };

const MapSearchDialogForm: React.FunctionComponent<ISearchDialogFormProps> = ({ onChange }) => (
  <Formik onSubmit={() => null} initialValues={initialValues}>
    <Form>
      <Forms.Input
        id="search"
        name="search"
        RightIcon={SearchIcon}
        placeholder="Ex. Ben Arous, Fouchena"
      />
      <OnChangeBind cls={initialValues} onChange={({ search }) => onChange(search)} />
    </Form>
  </Formik>
);

export default MapSearchDialogForm;
