// TaskListScreen.tsx
import React from 'react';
import { Text, ScrollView } from 'react-native';
import TaskItem from './TaskItem';
import { TaskListScreenProps } from './src/types/types';

const TaskListScreen: React.FC<TaskListScreenProps> = ({ tasks, onToggleCompletion }) => {
  return (
    <ScrollView>
      <Text>Task List</Text>
      <TaskItem tasks={tasks} onToggleCompletion={onToggleCompletion} />
    </ScrollView>
  );
};

export default TaskListScreen;
