import React from 'react';
import {View} from 'react-native';

import {
  AuthNavigation,
  AuthParams,
} from '../../../navigation/authStack/interface';
import {
  COLORS,
  CustomText,
  Dictionary,
  registerUser,
  RegisterValue,
  ScreenLayout,
} from '../../../shared';
import {RegistrationFrom} from './registrationForm';

import {styles} from './style';

interface RegistrationScreenProps {
  navigation: AuthNavigation;
}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  navigation,
}) => {
  const onSignIn = () => navigation.navigate(AuthParams.login);

  const onSubmit = (values: RegisterValue) => {
    registerUser(values.email, values.password);
  };
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <CustomText fontFamily="Poppins-Bold" style={styles.signInText}>
          {Dictionary.SignIn}
        </CustomText>
        <RegistrationFrom onSubmitRegistration={onSubmit} />
        <View style={styles.questionContainer}>
          <CustomText style={{color: COLORS.darkGray}}>
            {Dictionary.haveAccount}
          </CustomText>
          <CustomText
            fontFamily="Poppins-Bold"
            style={styles.signUpText}
            onPress={onSignIn}>
            {Dictionary.SignIn}
          </CustomText>
        </View>
      </View>
    </ScreenLayout>
  );
};
