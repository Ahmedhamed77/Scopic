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

interface ListScreenProps {
  navigation: AppNavigation;
}

export const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const {tasks} = useSelector((store: Store) => store.task);

  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => setToggle(previousState => !previousState);

  const onNavigation = () => navigation.navigate(MainParams.profile);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection(DB.task)
      .onSnapshot(snapshot => {
        const test = snapshot.docs.map(doc => ({
          data: doc.data() as TaskData,
          id: doc.id,
        }));
        dispatch(getTasks(test));
      });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAdd = () => {
    setModalVisible(true);
  };

  const onSubmitTask = (values: TaskValues) => {
    addTask(values);
    onCloseModal();
  };

  const onDelete = (id: string) => {
    deleteTask(id);
  };

  const onCloseModal = () => setModalVisible(!modalVisible);

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
      />
    </ScreenLayout>
  );
};
