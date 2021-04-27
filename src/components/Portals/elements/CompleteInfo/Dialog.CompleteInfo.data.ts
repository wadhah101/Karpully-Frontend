import * as Yup from 'yup'

export interface FormValues {
  firstName: string
  lastName: string
  age: string
  gender: string
}
export const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  firstName: Yup.string().required().min(2),
  lastName: Yup.string().required().min(2),
  age: Yup.string()
    .required()
    .matches(/[1,9][0,9]+/),
  gender: Yup.string().required().oneOf(['Male', 'Female'], 'ERROR GENDER'),
})
