import React from 'react';
import {View} from 'react-native';

import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  PressableScale,
} from '../../../../shared';
import {validationLoginSchema} from '../../../../shared';
import {LoginValue} from '../../../../shared';
import {styles} from './style';

interface LoginFormProp {
  onSubmitLogin(values: LoginValue): void;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProp> = ({
  onSubmitLogin,
  isLoading,
}) => {
  console.log(isLoading, '-isLoading');
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
          secureTextEntry={true}
        />
        <PressableScale activeScale={0.2}>
          <AppSubmitButton isLoading={isLoading} title={'sign in'} />
        </PressableScale>
      </AppForm>
    </View>
  );
};
