import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

export const validationRegisterSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const validationTaskSchema = Yup.object().shape({
  title: Yup.string().max(40, 'title 40').required().label('Title'),
  desc: Yup.string().max(150).label('Description'),
});
