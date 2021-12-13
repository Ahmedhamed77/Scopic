import React from 'react';

import {styles} from './style';
import {FlatList, ListRenderItem, View} from 'react-native';
import {CreateTask} from '../createTask';
import {CustomText, Swipable, Task, TaskValues} from '../../../../shared';
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
  // const renderItem: ListRenderItem<Task> = ({item}) => {
  //   const title = item.data.title.trim().replace(/\s+/g, ' ');
  //   const onDeleteItem = () => onDelete(item.id);
  //   return (
  //     <Swipable onDelete={onDeleteItem}>
  //       <View key={item.id} style={styles.renderItemContainer}>
  //         <CustomText style={styles.titleStyle}>{title}</CustomText>
  //       </View>
  //     </Swipable>
  //   );
  // };

  // const renderPressistItem: ListRenderItem<PersistTasks> = ({item}) => {
  //   const title = item.title.trim().replace(/\s+/g, ' ');
  //   return (
  //     <Swipable onDelete={onDeleteItem}>
  //       <View key={item.id} style={styles.renderItemContainer}>
  //         <CustomText style={styles.titleStyle}>{title}</CustomText>
  //       </View>
  //     </Swipable>
  //   );
  // };

  // const Separator = () => {
  //   return <View style={styles.separator} />;
  // };

  console.log(toggle, '===r');

  return (
    <>
      <CreateTask
        modalVisible={modalVisible}
        onClose={onCloseModal}
        onSubmitTask={onSubmitTask}
      />

      <HeaderFlatList
        onHeaderPress={onHeaderPress}
        toggle={toggle}
        onToggle={onSwitchToggle}
      />

      {!toggle
        ? persistTask?.map(item => {
            const title = item.title.trim().replace(/\s+/g, ' ');

            const onDeleteItem = () => onDelete(item.id);

            return (
              <Swipable key={item.id} onDelete={onDeleteItem}>
                <View key={item.id} style={styles.renderItemContainer}>
                  <CustomText style={styles.titleStyle}>{title}</CustomText>
                </View>
              </Swipable>
            );
          })
        : tasks.map(item => {
            console.log(item, '==');
            const title = item.data.title.trim().replace(/\s+/g, ' ');
            const onDeleteItem = () => onDelete(item.id);
            return (
              <Swipable key={item.id} onDelete={onDeleteItem}>
                <View key={item.id} style={styles.renderItemContainer}>
                  <CustomText style={styles.titleStyle}>{title}</CustomText>
                </View>
              </Swipable>
            );
          })}

      {/* <FlatList
        data={tasks}
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
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContainer}>
              <CustomText>no tasks, try to add some</CustomText>
            </View>
          );
        }}
      /> */}
      <Footer onPress={onAdd} />
    </>
  );
};
