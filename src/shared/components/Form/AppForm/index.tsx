import React from 'react';
import {Formik} from 'formik';
import {initialFormValues} from '@Shared/types';

interface FormikProps {
  initialValues: initialFormValues;
  validationSchema: any;
  onSubmit(values: initialFormValues): void;
}

export const AppForm: React.FC<FormikProps> = ({
  initialValues,
  validationSchema,
  children,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({}) => <>{children}</>}
    </Formik>
  );
};
