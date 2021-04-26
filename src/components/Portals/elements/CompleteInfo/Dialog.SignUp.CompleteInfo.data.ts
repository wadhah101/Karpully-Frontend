import * as Yup from 'yup'

export interface FormValues {
  firstName: string
  lastName: string
  age: string
  sex: number
}
export const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  age: '',
  sex: 0,
}

//   (async () => {
//   const a = await authLessClient.query({ query: gql`` })
//   return a.eil
// })

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  age: Yup.string().required(),
  sex: Yup.number().required(),
})
