// TaskItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TaskItemProps } from './src/types/types'; // Adjust the path as needed

const TaskItem: React.FC<TaskItemProps> = ({ tasks, onToggleCompletion }) => {
  return (
    <View>
      {tasks.map((task, key) => (
        <View key={key}>
          <Text>Title: {task?.title}</Text>
          <Text>Description: {task?.description}</Text>
          <Text>Due Date: {task?.dueDate.toISOString()}</Text>
          <Text>Completed: {task?.isCompleted ? 'Yes' : 'No'}</Text>
          <TouchableOpacity onPress={() => onToggleCompletion(task?.id)}>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TaskItem;
