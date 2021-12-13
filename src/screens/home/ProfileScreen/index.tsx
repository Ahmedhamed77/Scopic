import React from 'react';
import {View} from 'react-native';
import {
  CommonButton,
  CustomText,
  Header,
  logout,
  ScreenLayout,
} from '@Shared/index';
import {UseAuth} from '@Shared/hooks';
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
