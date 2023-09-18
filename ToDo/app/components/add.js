import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function add(props) {
  const {addTask} = props;
  return (
    <TouchableOpacity onPress={addTask}>
      <Text style={{backgroundColor: 'lightblue', padding: 10}}>Add Task</Text>
    </TouchableOpacity>
  );
}
