
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TaskList } from './types';

interface TaskListScreenProps {
  tasks: TaskList;
  onToggleCompletion: (taskId: number) => void;
}

export const TaskListScreen: React.FC<TaskListScreenProps> = ({ tasks, onToggleCompletion }) => {
  return (
    <ScrollView>
      <Text>Task List</Text>
      {tasks.map((item, key) => (
        <View key={key}>
          <Text>Title: {item?.title}</Text>
          <Text>Description: {item?.description}</Text>
          <Text>Due Date: {item?.dueDate.toISOString()}</Text>
          <Text>Completed: {item?.isCompleted ? 'Yes' : 'No'}</Text>
          <TouchableOpacity onPress={() => onToggleCompletion(item?.id)}>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
