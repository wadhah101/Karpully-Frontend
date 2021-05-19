import * as Forms from '@comp/Forms/export';
import * as Yup from 'yup';

export interface FormValues {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  phone: string;
}
export const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  phone: '',
};

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  firstName: Yup.string().required(Forms.Messsages.REQUIRED).min(2),
  lastName: Yup.string().required(Forms.Messsages.REQUIRED).min(2),
  age: Yup.string()
    .required()
    .test('number', 'Age must be a number', (e) => !!Number(e))
    .test('min', Forms.Messsages.AGE, (e) => Number(e) >= 18 && Number(e) <= 99),
  gender: Yup.string().required().oneOf(['Male', 'Female'], 'ERROR GENDER'),
  // TODO phone regex
  phone: Yup.string()
    .required()
    .matches(/[0-9+\s]+/, Forms.Messsages.PHONE_NUMBER),
});
