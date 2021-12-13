import React from 'react';

import {Animated, Text, View} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../styles';
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
            <FontAwesomeIcon name="trash" color={COLORS.darkRed} size={20} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable>
  );
};
