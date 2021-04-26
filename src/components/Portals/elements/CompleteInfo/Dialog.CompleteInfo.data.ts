import * as Yup from 'yup'

export interface FormValues {
  firstName: string
  lastName: string
  localization: string
  age: string
  gender: number
}
export const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  age: '',
  localization: '',
  gender: 0,
}

//   (async () => {
//   const a = await authLessClient.query({ query: gql`` })
//   return a.eil
// })

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  firstName: Yup.string().required().min(2),
  lastName: Yup.string().required().min(2),
  age: Yup.string().required().min(18),
  gender: Yup.number().required().min(0).max(1),
  localization: Yup.string().required(),
})
