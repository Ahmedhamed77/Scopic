import React from 'react';
import {View} from 'react-native';

import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  Dictionary,
  RegisterValue,
} from '../../../../shared';
import {validationLoginSchema} from '../../../../shared';
import {styles} from './style';

interface RegistrationFromProps {
  onSubmitRegistration(values: RegisterValue): void;
}

export const RegistrationFrom: React.FC<RegistrationFromProps> = ({
  onSubmitRegistration,
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
          wrapperContainer={styles.wrapperButton}
          title={Dictionary.signUp}
        />
      </AppForm>
    </View>
  );
};
