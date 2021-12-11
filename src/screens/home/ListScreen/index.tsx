import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  FlatList,
  ListRenderItem,
  Modal,
  Text,
  TouchableHighlight,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  AppNavigation,
  MainParams,
} from '../../../navigation/mainStack/interface';
import {
  COLORS,
  CommonButton,
  CustomText,
  Header,
  ScreenLayout,
  TaskValues,
} from '../../../shared';
import {Toggle} from '../../../shared/components/Toggle';
import {CreateTask} from './createTask';
import {styles} from './style';

interface ListScreenProps {
  navigation: AppNavigation;
}

export const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const [tasks, setTasks] = useState<any>();
  const onPress = () => navigation.navigate(MainParams.profile);
  const [modalVisible, setModalVisible] = useState(false);

  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => setToggle(previousState => !previousState);

  const onResult = QuerySnapshot => {
    console.log('Got Users collection result.', QuerySnapshot);
  };

  const onError = error => {
    console.error(error);
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('task')
      .onSnapshot(snapshot =>
        setTasks(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })),
        ),
      );
    return () => unsubscribe();
  }, []);
  const onListAdd = () => {
    setModalVisible(true);
  };
  console.log(tasks, 'sssss');

  const onSubmitTask = (values: TaskValues) => {
    firestore()
      .collection('task')
      .add({
        title: values.title,
        desc: values.desc,
        createdAt: new Date(),
      })
      .then(() => {
        console.log('User added!');
      })
      .catch(err => console.log(err, 'error adding task'));
  };
  const onCloseModal = () => setModalVisible(!modalVisible);
  const renderItem: ListRenderItem<ListData> = ({item}) => {
    return (
      <View key={item.id}>
        <CustomText>{item.name}</CustomText>
      </View>
    );
  };
  return (
    <ScreenLayout>
      <CreateTask
        modalVisible={modalVisible}
        onClose={onCloseModal}
        onSubmitTask={onSubmitTask}
      />
      <FlatList
        data={listData}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        ListHeaderComponent={() => {
          return (
            <>
              <Header
                screenTitle="list"
                rightTitle="Profile"
                onNextScreen={onPress}
              />
              <View style={styles.toggleContainer}>
                <Toggle value={toggle} onToggle={toggleSwitch} />
              </View>
            </>
          );
        }}
      />

      <View style={styles.footerContainer}>
        <CommonButton
          touchableStyle={styles.button}
          title="+"
          onPress={onListAdd}
        />
      </View>
    </ScreenLayout>
  );
};

export type ListData = {
  id: number;
  name: string;
};

export const listData: ListData[] = [
  {
    id: 1,
    name: 'Task 1',
  },
  {
    id: 2,
    name: 'Task 2',
  },
];
