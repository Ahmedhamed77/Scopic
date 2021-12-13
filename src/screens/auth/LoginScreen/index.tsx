import React, {useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';

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
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../redux/auth/action';
// import Icon from 'react-native-vector-icons/FontAwesome';

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
        console.log('user signed in');
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
          <LoginForm onSubmitLogin={onSubmit} isLoading={loading} />
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
