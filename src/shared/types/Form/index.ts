import {FormikErrors, FormikTouched} from 'formik';

export interface LoginValue {
  email: string;
  password: string;
}
export interface RegisterValue extends LoginValue {
  confirmPassword: string;
}

export interface TaskValues {
  title: string;
  desc: string;
}
export type initialFormValues = Readonly<
  LoginValue | RegisterValue | TaskValues
>;

export interface UseFormikContext {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  values: any;
  errors: FormikErrors<any>;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean,
  ) => void;
  touched: FormikTouched<any>;
}
