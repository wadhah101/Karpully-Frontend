import * as Yup from 'yup'

export interface FormValues {
  fullName: string
  username: string
  password: string
}
export const initialValues: FormValues = {
  fullName: '',
  username: '',
  password: '',
}

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  fullName: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required().min(5),
})
