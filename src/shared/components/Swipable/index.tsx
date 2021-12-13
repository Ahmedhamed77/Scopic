import React from 'react';

import {Animated, Text, View, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from 'shared';

import {styles} from './style';

interface SwipableProps {
  onDelete(): void;
}

export const Swipable: React.FC<SwipableProps> = ({onDelete, children}) => {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
    const opacity = dragX.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.swipedRow}>
        <View style={styles.swipedConfirmationContainer}>
          <Text style={styles.deleteConfirmationText}>Are you sure?</Text>
        </View>
        <Animated.View style={[styles.deleteButton, {opacity}]}>
          <TouchableOpacity onPress={onDelete}>
            <Icon name="trash" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable>
    </GestureHandlerRootView>
  );
};
