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

interface ProfileScreenProps {}
interface IRow {
  id: string;
  title: string;
}
export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {user} = UseAuth();

  return (
    <ScreenLayout>
      <Header
        wrapperStyle={{
          paddingHorizontal: 12,
        }}
        screenTitle="list"
      />

      <View
        style={{
          paddingTop: 50,
          flex: 1,
          justifyContent: 'space-between',
          paddingHorizontal: 24,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CustomText>{user?.email}</CustomText>
        </View>
        <CommonButton title="logout" onPress={logout} />
      </View>
    </ScreenLayout>
  );
};
