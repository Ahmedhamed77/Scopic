import React from 'react';

import {styles} from './style';
import {FlatList, ListRenderItem, View} from 'react-native';
import {CreateTask} from '../createTask';
import {
  CustomText,
  ItemSeparator,
  removeSpaces,
  Swipable,
  Task,
  TaskValues,
} from '../../../../shared';
import {Footer} from '../footer';
import {HeaderFlatList} from '../header';
import {PersistTasks} from '../../../../redux/persistTasks/types';

interface ListScreenViewProps {
  modalVisible: boolean;
  toggle: boolean;
  tasks: Task[];
  onCloseModal(): void;
  onSwitchToggle(): void;
  onSubmitTask(values: TaskValues): void;
  onAdd(): void;
  onHeaderPress(): void;
  onDelete(id: string): void;
  persistTask: PersistTasks[];
}

export const ListScreenView: React.FC<ListScreenViewProps> = ({
  modalVisible,
  toggle,
  tasks,
  onCloseModal,
  onSubmitTask,
  onAdd,
  onHeaderPress,
  onSwitchToggle,
  persistTask,
  onDelete,
}) => {
  const newData: Task[] = toggle
    ? tasks
    : (persistTask as Omit<Task[], 'data'>);

  const renderItem: ListRenderItem<Task> = ({item}) => {
    const title = toggle
      ? removeSpaces(item.data.title)
      : removeSpaces(item.title);
    const onDeleteItem = () => onDelete(item.id);
    return (
      <Swipable onDelete={onDeleteItem}>
        <View key={item.id} style={styles.renderItemContainer}>
          <CustomText style={styles.titleStyle}>{title}</CustomText>
        </View>
      </Swipable>
    );
  };

  return (
    <>
      <CreateTask
        modalVisible={modalVisible}
        onClose={onCloseModal}
        onSubmitTask={onSubmitTask}
      />
      <FlatList
        data={newData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        ListHeaderComponent={
          <HeaderFlatList
            onHeaderPress={onHeaderPress}
            toggle={toggle}
            onToggle={onSwitchToggle}
          />
        }
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContainer}>
              <CustomText>no tasks, try to add some</CustomText>
            </View>
          );
        }}
      />
      <Footer onPress={onAdd} />
    </>
  );
};

// <CreateTask
// modalVisible={modalVisible}
// onClose={onCloseModal}
// onSubmitTask={onSubmitTask}
// />

// <HeaderFlatList
// onHeaderPress={onHeaderPress}
// toggle={toggle}
// onToggle={onSwitchToggle}
// />
// <View style={{paddingHorizontal: 24, backgroundColor: 'red'}}>
// {/* {toggle ?} */}
// {tasks.map(item => {
//   console.log(item, '==');
//   const title = item.data.title.trim().replace(/\s+/g, ' ');
//   const onDeleteItem = () => onDelete(item.id);
//   return (
//     <Swipable key={item.id} onDelete={onDeleteItem}>
//       <View style={styles.renderItemContainer}>
//         <CustomText style={styles.titleStyle}>{title}</CustomText>
//       </View>
//     </Swipable>
//   );
// })}
// </View>
