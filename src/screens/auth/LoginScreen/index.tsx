import React from 'react';
import {View} from 'react-native';

import {
  CustomText,
  Dictionary,
  LoginValue,
  ScreenLayout,
} from '../../../shared';
import {LoginForm} from './LoginForm';
import {
  AuthNavigation,
  AuthParams,
} from '../../../navigation/authStack/interface';
import {login} from '../../../shared';
import {styles} from './style';

interface LoginScreenProps {
  navigation: AuthNavigation;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate(AuthParams.registration);
  };
  const onSubmit = (values: LoginValue) => {
    login(values.email, values.password);
  };
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <CustomText fontFamily="Poppins-Bold" style={styles.headerText}>
              {Dictionary.Scopic}
            </CustomText>
          </View>
          <CustomText fontFamily="Poppins-Bold" style={styles.signIn}>
            {Dictionary.SignIn}
          </CustomText>
          <LoginForm onSubmitLogin={onSubmit} />
        </View>

        <View style={styles.footer}>
          <CustomText
            fontFamily="Poppins-Bold"
            style={styles.footerText}
            onPress={onSignUp}>
            {Dictionary.signUp}
          </CustomText>
        </View>
      </View>
    </ScreenLayout>
  );
};
