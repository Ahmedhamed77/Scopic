import React from 'react';

import {styles} from './style';
import {Modal, TouchableNativeFeedback, View} from 'react-native';
import {
  AppForm,
  AppInputField,
  AppSubmitButton,
  CustomText,
  validationTaskSchema,
} from '../../../../shared';

interface CreateTaskProps {
  modalVisible: boolean;
  onSubmitTask(): void;
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
            desc: '',
          }}
          validationSchema={validationTaskSchema}
          onSubmit={onSubmitTask}>
          <AppInputField
            inverted={true}
            placeholder="your task title"
            name="title"
            maxLength={40}
          />

          <AppInputField placeholder="your task desc" name="desc" />
          <AppSubmitButton title={'add'} />
        </AppForm>
      </View>
    </Modal>
  );
};
