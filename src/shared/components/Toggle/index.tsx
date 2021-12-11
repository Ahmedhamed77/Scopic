import React from 'react';

import {Switch, SwitchProps} from 'react-native';

interface ToggleProps extends SwitchProps {
  value: boolean;
  onToggle(): void;
}

export const Toggle: React.FC<ToggleProps> = ({value, onToggle, ...props}) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: 'green'}}
      thumbColor={'#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onToggle}
      value={value}
      {...props}
    />
  );
};
