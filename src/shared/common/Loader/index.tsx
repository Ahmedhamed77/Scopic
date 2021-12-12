import React from 'react';

import LottieView from 'lottie-react-native';

import {ActivityIndicator, StyleProp, View, ViewStyle} from 'react-native';

import styles from './styles';

interface LoaderProps extends LottieLoaderProps {
  color?: string;
  withModal?: boolean;
  activityStyle?: StyleProp<ViewStyle>;
}

export const Loader: React.FC<LoaderProps> = ({
  color,
  size = 'large',

  lottie,
  activityStyle,
}) => {
  if (lottie) return <LottieLoader size={size} lottie={lottie} />;
  return <ActivityIndicator color={color} size={size} style={activityStyle} />;
};

interface LottieLoaderProps {
  size?: 'large' | 'small';
  lottie?: boolean;
}

const LottieLoader: React.FC<LottieLoaderProps> = ({size, lottie}) => {
  return (
    <LottieView
      source={require('@Shared/assets/json/loading.json')}
      loop
      autoPlay
      resizeMode="cover"
      style={[
        lottie && styles.lottie,
        size === 'small' ? styles.loadingSmall : styles.loadingLarge,
      ]}
    />
  );
};
