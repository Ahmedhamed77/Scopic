import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  AppNavigation,
  MainParams,
} from '../../../navigation/mainStack/interface';
import {ScreenLayout, TaskValues} from '../../../shared';
import {TaskData} from '../../../shared/types';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '../../../redux/types';
import {getTasks} from '../../../redux/task/action';
import {DB} from '../../../shared/firebase/db';
import {addTask} from '../../../shared/firebase/addTask';
import {deleteTask} from '../../../shared/firebase/deleteTask';
import {ListScreenView} from './view';
import {UseAuth} from '../../../shared/hooks';
import {ActivityIndicator, View} from 'react-native';
import {
  createNewTask,
  deleteTask as deletePersistTasks,
} from '../../../redux/persistTasks/action';

interface ListScreenProps {
  navigation: AppNavigation;
}

export const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {user} = UseAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const {persistTasks} = useSelector((state: Store) => state.persistTasks);

  const dispatch = useDispatch();
  const {tasks, loading} = useSelector((store: Store) => store.task);

  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => setToggle(previousState => !previousState);

  const onNavigation = () => navigation.navigate(MainParams.profile);

  useEffect(() => {
    user && dispatch(getTasks(user.uid));
  }, [user, dispatch]);

  const onAdd = () => {
    setModalVisible(true);
  };

  const onSubmitTask = (values: TaskValues) => {
    console.log(values);
    if (toggle) {
      user && addTask(values, user?.uid);
      onCloseModal();
    } else {
      dispatch(createNewTask(values.title));
      onCloseModal();
    }
  };

  const onDelete = (id: string) => {
    toggle ? deleteTask(id) : dispatch(deletePersistTasks(id));
  };

  const onCloseModal = () => setModalVisible(!modalVisible);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScreenLayout>
      <ListScreenView
        modalVisible={modalVisible}
        toggle={toggle}
        tasks={tasks}
        onHeaderPress={onNavigation}
        onSwitchToggle={toggleSwitch}
        onAdd={onAdd}
        onDelete={onDelete}
        onCloseModal={onCloseModal}
        onSubmitTask={onSubmitTask}
        persistTask={persistTasks}
      />
    </ScreenLayout>
  );
};
