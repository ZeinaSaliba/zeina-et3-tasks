import React from 'react';
import { View } from 'react-native';
import { TaskManager } from './TaskManager';
import { TaskList } from './customTypes/types';

const initialTasks: TaskList = [];

const App = () => {
  return (
    <View>
      <TaskManager initialTasks={initialTasks} />
    </View>
  );
};

export default App;
