import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TaskList } from './customTypes/types';

interface TaskItemProps {
  tasks: TaskList; // Accept an array of tasks
  onToggleCompletion: (taskId: number) => void;
}

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
