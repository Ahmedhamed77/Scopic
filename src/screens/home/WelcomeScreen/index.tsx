import React from 'react';
import {View} from 'react-native';

import {AppNavigation, MainParams} from '@Navigation/mainStack/interface';
import {
  CommonButton,
  CustomText,
  Dictionary,
  ScreenLayout,
} from '@Shared/index';
import {styles} from './style';

interface WelcomeScreenProps {
  navigation: AppNavigation;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate(MainParams.list);
  };

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <CustomText style={styles.welcomeText} fontFamily="Poppins-Bold">
          {Dictionary.welcome}
        </CustomText>
        <CustomText style={styles.welcomeMsgText}>
          {Dictionary.welcomeMsg}
        </CustomText>
        <CommonButton
          wrapperContainer={{marginBottom: 32}}
          onPress={onPress}
          title="list"
        />
      </View>
    </ScreenLayout>
  );
};
