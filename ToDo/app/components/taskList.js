import React from 'react';
import { View, Text } from 'react-native';
import Edit from './edit';
import Remove from './remove';

const TaskList = ({ tasks, editTask, removeTask }) => {
  return (
    <View>
      {tasks.map((task, key) => (
        <View key={key} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{task?.taskTitle}</Text>
          <Text>{task?.taskDescription}</Text>
          <Edit editTask={() => editTask(task)} />
          <Remove removeTask={() => removeTask(task.id)} />
        </View>
      ))}
    </View>
  );
};

export default TaskList;
