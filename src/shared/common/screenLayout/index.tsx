import React from 'react';
import {SafeAreaView, ScrollView, ScrollViewProps} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

import {styles} from './style';

interface ScreenProps {
  scroll?: boolean;
  scrollLayout?: ScrollViewProps;
  viewLayout?: SafeAreaViewProps;
}
export const ScreenLayout: React.FC<ScreenProps> = ({
  scrollLayout: {...scrollLayoutProps} = {},
  viewLayout: {...viewLayoutProps} = {},
  scroll,
  children,
}) => {
  if (scroll) {
    return (
      <ScrollView style={styles.screen} {...scrollLayoutProps}>
        <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
      </ScrollView>
    );
  } else {
    return (
      <SafeAreaView style={styles.scrollScreen} {...viewLayoutProps}>
        {children}
      </SafeAreaView>
    );
  }
};
