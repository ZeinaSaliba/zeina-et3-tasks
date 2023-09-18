// TaskManager.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Task, TaskList } from './types';
import { TaskListScreen } from './TaskListScreen';

interface TaskManagerProps {
  initialTasks: TaskList;
}

export const TaskManager: React.FC<TaskManagerProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<TaskList>(initialTasks);
  const [newTask, setNewTask] = useState<Task>({
    id: 1,
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false,
  });

  const addTask = () => {
    if (newTask.title) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask({
        id: newTask.id + 1,
        title: '',
        description: '',
        dueDate: new Date(),
        isCompleted: false,
      });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Task Title"
        value={newTask.title}
        onChangeText={(text) => setNewTask({ ...newTask, title: text })}
      />
      <TextInput
        placeholder="Task Description"
        value={newTask.description}
        onChangeText={(text) => setNewTask({ ...newTask, description: text })}
      />
      <Button title="Add Task" onPress={addTask} />
      <TaskListScreen tasks={tasks} />
    </View>
  );
};
