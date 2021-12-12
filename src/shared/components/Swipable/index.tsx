import React from 'react';

import {Animated, Text, View} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from './style';

interface SwipableProps {
  onDelete?(): void;
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
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable>
  );
};
