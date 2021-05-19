import * as Forms from '@comp/Forms/export';
import * as Yup from 'yup';

export interface FormValues {
  username: string;
  password: string;
}
export const initialValues: FormValues = {
  username: '',
  password: '',
};

export const validationSchema: Yup.SchemaOf<FormValues> = Yup.object().shape({
  username: Yup.string().required(Forms.Messsages.REQUIRED),
  password: Yup.string().required(Forms.Messsages.REQUIRED).min(6),
});
