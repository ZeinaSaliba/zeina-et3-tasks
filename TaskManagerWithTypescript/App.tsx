import React from 'react';
import { View } from 'react-native';
import { TaskManager } from './TaskManager';
import { TaskList } from './src/types/types';

const initialTasks: TaskList = [];

const App = () => {
  return (
    <View>
      <TaskManager initialTasks={initialTasks} />
    </View>
  );
};

export default App;
