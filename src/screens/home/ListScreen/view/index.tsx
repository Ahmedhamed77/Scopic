import React from 'react';

import {styles} from './style';
import {FlatList, ListRenderItem, View} from 'react-native';
import {CreateTask} from '../createTask';
import {CustomText, Swipable, Task, TaskValues} from '../../../../shared';
import {Footer} from '../footer';
import {HeaderFlatList} from '../header';

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
  onDelete,
}) => {
  const renderItem: ListRenderItem<Task> = ({item}) => {
    const title = item.data.title.trim();
    const onDeleteItem = () => onDelete(item.id);
    return (
      <Swipable onDelete={onDeleteItem}>
        <View key={item.id} style={styles.renderItemContainer}>
          <CustomText style={styles.titleStyle}>{title}</CustomText>
          <CustomText style={styles.descStyle}>{item.data.desc}</CustomText>
        </View>
      </Swipable>
    );
  };

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <>
      <CreateTask
        modalVisible={modalVisible}
        onClose={onCloseModal}
        onSubmitTask={onSubmitTask}
      />

      <FlatList
        data={tasks}
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
            <View>
              <CustomText>empty</CustomText>
            </View>
          );
        }}
      />
      <Footer onPress={onAdd} />
    </>
  );
};
