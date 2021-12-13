import React from 'react';

import {styles} from './style';
import {Modal, View} from 'react-native';
import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  CustomText,
  initialFormValues,
  validationTaskSchema,
} from '../../../../shared';

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
        <CustomText onPress={onClose}>X</CustomText>
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
