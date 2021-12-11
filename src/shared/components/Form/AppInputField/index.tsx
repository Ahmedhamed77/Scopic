import React from 'react';
import {useFormikContext} from 'formik';

import {UseFormikContext} from '../../../types';
import {Text, StyleSheet} from 'react-native';

import {COLORS} from '../../../styles';
import {CommonInput, CommonInputProps} from '../../../common';

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
