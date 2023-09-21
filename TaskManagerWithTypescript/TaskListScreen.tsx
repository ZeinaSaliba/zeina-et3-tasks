import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TaskList } from './customTypes/types';
import TaskItem from './TaskItem'; // Import the TaskItem component

interface TaskListScreenProps {
  tasks: TaskList;
  onToggleCompletion: (taskId: number) => void;
}

export const TaskListScreen: React.FC<TaskListScreenProps> = ({ tasks, onToggleCompletion }) => {
  return (
    <ScrollView>
      <Text>Task List</Text>
      <TaskItem tasks={tasks} onToggleCompletion={onToggleCompletion} />
    </ScrollView>
  );
};
