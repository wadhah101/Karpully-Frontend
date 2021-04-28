import * as Yup from 'yup'

export interface FormValues {
  firstName: string
  lastName: string
  age: string
  gender: string
  phone: string
}
export const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  phone: '',
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  firstName: Yup.string().required().min(2),
  lastName: Yup.string().required().min(2),
  age: Yup.string()
    .required()
    .test('number', 'Age must be a number', (e) => !!Number(e))
    .test('min', 'Minimum Age is 18', (e) => Number(e) >= 18)
    .test('max', 'Maximum Age is 99', (e) => Number(e) <= 99),
  gender: Yup.string().required().oneOf(['Male', 'Female'], 'ERROR GENDER'),
  // TODO phone regex
  phone: Yup.string()
    .required()
    .matches(/[0-9+\s]+/, 'Must be a phone number'),
})
