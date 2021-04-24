import * as Yup from 'yup'

export interface FormValues {
  username: string
  email: string
  password: string
}
export const initialValues: FormValues = {
  username: '',
  email: '',
  password: '',
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
})
