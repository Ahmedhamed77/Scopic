import React, {useState} from 'react';
import {Alert, Pressable, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

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
import {loginUser} from '../../../redux/auth/action';
import {styles} from './style';
interface LoginScreenProps {
  navigation: AuthNavigation;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (values: LoginValue) => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        dispatch(loginUser());
      })
      .catch(err => {
        Alert.alert(err.code);
        setLoading(false);
      });
  };

  const onSignUp = () => {
    navigation.navigate(AuthParams.registration);
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
          <LoginForm onSubmitLogin={onSubmit} isLoading={loading} />
        </View>

        <Pressable onPress={onSignUp} style={styles.footer}>
          <CustomText fontFamily="Poppins-Bold" style={styles.footerText}>
            {Dictionary.signUp}
          </CustomText>
        </Pressable>
      </View>
    </ScreenLayout>
  );
};
