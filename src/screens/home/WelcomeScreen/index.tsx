import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {
  AppNavigation,
  MainParams,
} from '../../../navigation/mainStack/interface';
import {
  CommonButton,
  CustomText,
  Dictionary,
  ScreenLayout,
} from '../../../shared';
import {styles} from './style';

// import Icon from 'react-native-vector-icons/FontAwesome5';

interface WelcomeScreenProps {
  navigation: AppNavigation;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const onPress = () => navigation.navigate(MainParams.list);

  return (
    <ScreenLayout>
      {/* <Icon name="rocket" size={30} color="#900" /> */}
      <View style={styles.container}>
        <CustomText style={styles.welcomeText} fontFamily="Poppins-Bold">
          {Dictionary.welcome}
        </CustomText>
        <CustomText style={styles.welcomeMsgText}>
          {Dictionary.welcomeMsg}
        </CustomText>
        <CommonButton onPress={onPress} title="list" />
      </View>
    </ScreenLayout>
  );
};