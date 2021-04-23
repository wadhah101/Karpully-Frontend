import * as Yup from 'yup'

export interface FormValues {
  fullName: string
  email: string
  password: string
}
export const initialValues: FormValues = {
  fullName: '',
  email: '',
  password: '',
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(5),
})
