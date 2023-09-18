import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (newTask) {
      // Create a new task object
      const task = {
        id: tasks.length + 1, // Assign a unique ID
        created_on: new Date().toLocaleString(), // Set the creation date
        taskTitle: newTask,
        taskDescription: '', // You can add a description field if needed
      };

      // Create a copy of the tasks array and add the new task
      const updatedTasks = [...tasks, task];

      // Update the tasks array with the new task
      setTasks(updatedTasks);

      // Clear the input field
      setNewTask('');
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

    // Populate the input field with the text of the task
    setNewTask(task.taskTitle);
  };

  const updateTask = () => {
    if (editingIndex !== -1 && newTask) {
      // Create a copy of the tasks array and find the task to update by ID
      const updatedTasks = tasks.map((task) =>
        task.id === editingIndex
          ? { ...task, taskTitle: newTask }
          : task
      );

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

      {tasks.map((task) => (
        <View
          key={task.id}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Text>{task.taskTitle}</Text>
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
