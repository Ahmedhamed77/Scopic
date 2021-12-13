import React, {useEffect, useState} from 'react';

import {AppNavigation, MainParams} from '@Navigation/mainStack/interface';
import {Loader, ScreenLayout, TaskValues} from '@Shared/index';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '@Redux/types';
import {getTasks} from '@Redux/task/action';
import {addTask} from '@Shared/firebase/addTask';
import {deleteTask} from '@Shared/firebase/deleteTask';
import {ListScreenView} from './view';
import {UseAuth} from '@Shared/hooks';

import {
  createNewTask,
  deleteTask as deletePersistTasks,
} from '@Redux/persistTasks/action';
import {styles} from './style';

interface ListScreenProps {
  navigation: AppNavigation;
}

export const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const {user} = UseAuth();

  const {persistTasks} = useSelector((state: Store) => state.persistTasks);
  const {tasks, loading} = useSelector((store: Store) => store.task);

  const dispatch = useDispatch();

  useEffect(() => {
    user && dispatch(getTasks(user.uid));
  }, [user, dispatch]);

  const toggleSwitch = () => setToggle(previousState => !previousState);

  const onNavigation = () => navigation.navigate(MainParams.profile);

  const onAdd = () => {
    setModalVisible(true);
  };

  const onSubmitTask = (values: TaskValues) => {
    if (toggle) {
      user && addTask(values, user?.uid);
    } else {
      dispatch(createNewTask(values.title));
    }
    onCloseModal();
  };

  const onDelete = (id: string) => {
    toggle
      ? user && deleteTask(user.uid, id)
      : dispatch(deletePersistTasks(id));
  };

  const onCloseModal = () => setModalVisible(!modalVisible);

  if (loading) {
    return <Loader style={styles.loader} />;
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
