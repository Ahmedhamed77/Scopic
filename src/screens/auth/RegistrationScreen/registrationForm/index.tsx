import React from 'react';
import {View} from 'react-native';

import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  Dictionary,
  RegisterValue,
  validationLoginSchema,
} from '@Shared/index';

import {styles} from './style';

interface RegistrationFromProps {
  onSubmitRegistration(values: RegisterValue): void;
  isLoading?: boolean;
}

export const RegistrationFrom: React.FC<RegistrationFromProps> = ({
  onSubmitRegistration,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationLoginSchema}
        onSubmit={onSubmitRegistration}>
        <AppInputField
          label="email"
          placeholder="your email address"
          name="email"
        />
        <AppInputField
          label="password"
          placeholder="your password"
          name="password"
        />
        <AppInputField
          label="confirm Password"
          placeholder="your password"
          name="confirmPassword"
        />
        <AppSubmitButton
          isLoading={isLoading}
          wrapperContainer={styles.wrapperButton}
          title={Dictionary.signUp}
        />
      </AppForm>
    </View>
  );
};
