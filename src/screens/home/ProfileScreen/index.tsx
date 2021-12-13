import React from 'react';
import {View} from 'react-native';
import {
  CommonButton,
  CustomText,
  Header,
  logout,
  ScreenLayout,
} from '../../../shared';
import {UseAuth} from '../../../shared/hooks';
import {styles} from './style';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {user} = UseAuth();

  return (
    <ScreenLayout>
      <Header wrapperStyle={styles.wrapper} screenTitle="list" />

      <View style={styles.contentContainer}>
        <View style={styles.emailContainer}>
          <CustomText>{user?.email}</CustomText>
        </View>

        <CommonButton
          wrapperContainer={{marginBottom: 32}}
          onPress={logout}
          title="logout"
        />
      </View>
    </ScreenLayout>
  );
};
