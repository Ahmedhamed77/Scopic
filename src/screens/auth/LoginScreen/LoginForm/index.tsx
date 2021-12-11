import React from 'react';
import {View} from 'react-native';

import {AppForm, AppInputField, AppSubmitButton} from '../../../../shared';
import {validationLoginSchema} from '../../../../shared';
import {LoginValue} from '../../../../shared';
import {styles} from './style';

interface LoginFormProp {
  onSubmitLogin(values: LoginValue): void;
}

export const LoginForm: React.FC<LoginFormProp> = ({onSubmitLogin}) => {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationLoginSchema}
        onSubmit={onSubmitLogin}>
        <AppInputField label="email" placeholder="your email" name="email" />
        <AppInputField
          label="password"
          placeholder="your password"
          name="password"
        />
        <AppSubmitButton title={'sign in'} />
      </AppForm>
    </View>
  );
};
