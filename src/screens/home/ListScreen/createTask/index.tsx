import React from 'react';
import {Modal, Pressable, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  COLORS,
  initialFormValues,
  validationTaskSchema,
} from '@Shared/index';
import {styles} from './style';

interface CreateTaskProps {
  modalVisible: boolean;
  onSubmitTask(values: initialFormValues): void;
  onClose(): void;
}

export const CreateTask: React.FC<CreateTaskProps> = ({
  modalVisible,
  onClose,
  onSubmitTask,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <Pressable onPress={onClose}>
          <FontAwesomeIcon name="close" size={30} color={COLORS.black} />
        </Pressable>
        <AppForm
          initialValues={{
            title: '',
          }}
          validationSchema={validationTaskSchema}
          onSubmit={onSubmitTask}>
          <AppInputField
            inverted={true}
            placeholder="your task title"
            name="title"
            maxLength={40}
          />

          <AppSubmitButton title={'add'} />
        </AppForm>
      </View>
    </Modal>
  );
};
