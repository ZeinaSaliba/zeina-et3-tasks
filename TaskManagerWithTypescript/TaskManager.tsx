import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import {Task, TaskList} from './src/types/types';
import TaskListScreen from './TaskListScreen';
import CustomTextInput from './components/CustomTextInput/CustomTextInput';
import CustomButton from './components/CustomButton/CustomButton';

interface TaskManagerProps {
  initialTasks: TaskList;
}

export const TaskManager: React.FC<TaskManagerProps> = ({initialTasks}) => {
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
      // Update tasks directly using push
      tasks.push(newTask);
      setTasks(tasks.slice()); // Trigger re-render by creating a new array reference

      // Clear the input fields and reset newTask
      setNewTask({
        id: newTask.id + 1,
        title: '',
        description: '',
        dueDate: new Date(),
        isCompleted: false,
      });
    }
  };

  const toggleCompletion = (taskId: number) => {
    // Update tasks directly using forEach
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
    });
    setTasks(tasks.slice()); // Trigger re-render by creating a new array reference
  };

  return (
    <View>
      <CustomTextInput
        placeholder="Task Title"
        value={newTask.title}
        onChangeText={text => setNewTask({...newTask, title: text})}
      />
      <CustomTextInput
        placeholder="Task Description"
        value={newTask.description}
        onChangeText={text => setNewTask({...newTask, description: text})}
      />
      <Switch
        value={newTask?.isCompleted}
        onValueChange={value => setNewTask({...newTask, isCompleted: value})}
      />
      <CustomButton title="Add Task" onPress={addTask} />
      <TaskListScreen tasks={tasks} onToggleCompletion={toggleCompletion} />
    </View>
  );
};
