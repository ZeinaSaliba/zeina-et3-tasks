import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (newTask) {
      // Create a new task object with a unique ID, creation date, title, and description
      const task = {
        id: tasks.length + 1,
        created_on: new Date().toLocaleString(),
        taskTitle: newTask,
        taskDescription: description, // Use the description input
      };

      // Create a copy of the tasks array and add the new task
      const updatedTasks = [...tasks, task];

      // Update the tasks array with the new task
      setTasks(updatedTasks);

      // Clear the input fields
      setNewTask('');
      setDescription('');
    }
  };

  const removeTask = (taskId) => {
    // Filter the tasks array to keep all tasks except the one with the given ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Update the tasks array with the filtered array
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    // Set the editingIndex to the ID of the task being edited
    setEditingIndex(task.id);

    // Populate the input fields with the text of the task
    setNewTask(task.taskTitle);
    setDescription(task.taskDescription);
  };

  const updateTask = () => {
    if (editingIndex !== -1 && newTask) {
      // Create a copy of the tasks array
      const updatedTasks = [...tasks];
  
      // Find the index of the task to update by ID
      const indexToUpdate = updatedTasks.findIndex((task) => task.id === editingIndex);
  
      if (indexToUpdate !== -1) {
        // Update the properties of the task directly
        updatedTasks[indexToUpdate].taskTitle = newTask;
        updatedTasks[indexToUpdate].taskDescription = description;
      }
  
      // Update the tasks array with the edited task
      setTasks(updatedTasks);
  
      // Clear the input fields and reset editingIndex
      setNewTask('');
      setDescription('');
      setEditingIndex(-1);
    }
  };
  

  return (
    <View>
      <TextInput
        placeholder="Task Title"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <TextInput
        placeholder="Task Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
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

      {tasks.map((task) => (
        <View
          key={task.id}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text>{task.taskTitle}</Text>
          <Text>{task.taskDescription}</Text>
          <TouchableOpacity onPress={() => editTask(task)}>
            <Text
              style={{
                backgroundColor: 'lightgreen',
                padding: 5,
                marginLeft: 10,
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTask(task.id)}>
            <Text
              style={{ backgroundColor: 'salmon', padding: 5, marginLeft: 10 }}
            >
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
