import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {UseFormikContext} from '@Shared/types';

import {useFormikContext} from 'formik';
import {CommonInput, CommonInputProps} from '@Shared/common';

import {COLORS} from '@Shared/styles';

interface AppInputFieldProps extends CommonInputProps {
  name: string;
}

export const AppInputField: React.FC<AppInputFieldProps> = ({
  children,
  name,
  ...props
}) => {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  }: UseFormikContext = useFormikContext();
  return (
    <>
      <CommonInput
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        textCounter={values[name]?.length}
        onBlur={() => setFieldTouched(name)}
        {...props}>
        {children}
      </CommonInput>
      {errors[name] && touched[name] && (
        <Text style={styles.error}>{errors[name]}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: COLORS.brightRed,
    top: -12,
  },
});
