// TaskListScreen.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TaskList } from './types';

interface TaskListScreenProps {
  tasks: TaskList;
}

export class TaskListScreen extends React.Component<TaskListScreenProps> {
  constructor(props: TaskListScreenProps) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <ScrollView>
        <Text>Task List</Text>
        {tasks.map((item) => (
          <View key={item.id}>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Due Date: {item.dueDate.toISOString()}</Text>
            <Text>Completed: {item.isCompleted ? 'Yes' : 'No'}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
