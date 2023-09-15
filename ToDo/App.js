import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (newTask) {
      // Create a copy of the tasks array
      const updatedTasks = [...tasks];
      // Add the new task to the end of the array using push
      updatedTasks.push(newTask);
      // Update the tasks array with the new task
      setTasks(updatedTasks);
      // Clear the input field
      setNewTask('');
    }
  };

  const removeTask = (indexToRemove) => {
    // Filter the tasks array to keep all tasks except the one at indexToRemove
    const updatedTasks = tasks.filter((task, index) => index !== indexToRemove);
    // Update the tasks array with the filtered array
    setTasks(updatedTasks);
  };

  const editTask = (task, index) => {
    // Set the editingIndex to the index of the task being edited
    setEditingIndex(index);
    // Populate the input field with the text of the task
    setNewTask(task);
  };

  const updateTask = () => {
    if (editingIndex !== -1 && newTask) {
      // Create a copy of the tasks array and update the task at the editingIndex
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask;
      // Update the tasks array with the edited task
      setTasks(updatedTasks);
      // Clear the input field and reset editingIndex
      setNewTask('');
      setEditingIndex(-1);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add a new task"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      {editingIndex === -1 ? (
        <TouchableOpacity onPress={addTask}>
          <Text style={{ backgroundColor: 'lightblue', padding: 10 }}>
            Add Task
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={updateTask}>
          <Text style={{ backgroundColor: 'lightgreen', padding: 10 }}>
            Update Task
          </Text>
        </TouchableOpacity>
      )}

      {tasks?.map((task, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{task}</Text>
          <TouchableOpacity onPress={() => editTask(task, index)}>
            <Text
              style={{
                backgroundColor: 'lightgreen',
                padding: 5,
                marginLeft: 10,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Text
              style={{ backgroundColor: 'salmon', padding: 5, marginLeft: 10 }}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
