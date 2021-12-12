import React from 'react';
import {TouchableOpacity, View} from 'react-native';

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
// import Icon from 'react-native-vector-icons/FontAwesome';

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
      {/* <Icon name="rocket" size={30} color="#900" />; */}
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

        <TouchableOpacity
          activeOpacity={1}
          onPress={onSignUp}
          style={styles.footer}>
          <CustomText fontFamily="Poppins-Bold" style={styles.footerText}>
            {Dictionary.signUp}
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};
