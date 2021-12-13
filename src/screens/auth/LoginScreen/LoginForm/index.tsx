import React from 'react';
import {View} from 'react-native';

import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  PressableScale,
  LoginValue,
  validationLoginSchema,
} from '@Shared/index';

import {styles} from './style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface LoginFormProp {
  onSubmitLogin(values: LoginValue): void;
  isLoading?: boolean;
  securePassword: boolean;
  onPressIcon?(): void;
}

export const LoginForm: React.FC<LoginFormProp> = ({
  onSubmitLogin,
  isLoading,
  securePassword,
  onPressIcon,
}) => {
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
          secureTextEntry={securePassword ? true : false}
          onIconPress={onPressIcon}
          icon={<MaterialIcon name="remove-red-eye" size={20} />}
        />
        <PressableScale activeScale={0.2}>
          <AppSubmitButton isLoading={isLoading} title={'sign in'} />
        </PressableScale>
      </AppForm>
    </View>
  );
};
