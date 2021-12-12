import React from 'react';

import {styles} from './style';
import {View} from 'react-native';
import {Header, Toggle} from '../../../../shared';

interface HeaderFlatListProps {
  onHeaderPress(): void;
  toggle: boolean;
  onToggle(): void;
}

export const HeaderFlatList: React.FC<HeaderFlatListProps> = ({
  onHeaderPress,
  onToggle,
  toggle,
}) => {
  return (
    <>
      <Header
        screenTitle="list"
        rightTitle="Profile"
        onNextScreen={onHeaderPress}
      />
      <View style={styles.toggleContainer}>
        <Toggle value={toggle} onToggle={onToggle} />
      </View>
    </>
  );
};
export default Header;
