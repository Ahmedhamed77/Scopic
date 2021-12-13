import React, {useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {
  AuthNavigation,
  AuthParams,
} from '../../../navigation/authStack/interface';
import {
  COLORS,
  CustomText,
  Dictionary,
  RegisterValue,
  ScreenLayout,
} from '../../../shared';
import {RegistrationFrom} from './registrationForm';

import {styles} from './style';
import {addUser} from '../../../shared/firebase/addUser';
import {useDispatch} from 'react-redux';
import {registerNewUser} from '../../../redux/auth/action';

interface RegistrationScreenProps {
  navigation: AuthNavigation;
}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  navigation,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSignIn = () => navigation.navigate(AuthParams.login);
  const dispatch = useDispatch();

  const onSubmit = (values: RegisterValue) => {
    setIsLoading(true);
    dispatch(registerNewUser());
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((res: FirebaseAuthTypes.UserCredential) => {
        addUser(values.email, res.user.uid);
      })
      .catch(error => {
        Alert.alert(error.code);
        setIsLoading(false);
      });
  };
  return (
    <ScreenLayout scroll>
      <View style={styles.container}>
        <CustomText fontFamily="Poppins-Bold" style={styles.signInText}>
          {Dictionary.SignIn}
        </CustomText>
        <RegistrationFrom
          isLoading={isLoading}
          onSubmitRegistration={onSubmit}
        />
        <View style={styles.questionContainer}>
          <CustomText style={{color: COLORS.darkGray}}>
            {Dictionary.haveAccount}
          </CustomText>
          <TouchableOpacity activeOpacity={1} onPress={onSignIn}>
            <CustomText fontFamily="Poppins-Bold" style={styles.signUpText}>
              {Dictionary.SignIn}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};
