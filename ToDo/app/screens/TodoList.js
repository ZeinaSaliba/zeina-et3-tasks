import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Add from '../components/add';
import Update from '../components/update';
import TaskList from '../components/taskList';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (newTask) {
      // Create a new task object with a unique ID, creation date, title, and description
      const task = {
        id: tasks ? tasks.length + 1 : 1,
        created_on: new Date().toLocaleString(),
        taskTitle: newTask,
        taskDescription: description, // Use the description input
      };

      // Concatenate the new task with the existing tasks array
      const updatedTasks = tasks ? tasks.concat(task) : [task];

      // Update the tasks array with the new task
      setTasks(updatedTasks);

      // Clear the input fields
      setNewTask('');
      setDescription('');
    }
  };

  const removeTask = (taskId) => {
    // Filter the tasks array to keep all tasks except the one with the given ID
    const updatedTasks = tasks.filter((task) => task?.id !== taskId);

    // Update the tasks array with the filtered array
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    // Set the editingIndex to the ID of the task being edited
    setEditingIndex(task?.id);

    // Populate the input fields with the text of the task
    setNewTask(task?.taskTitle);
    setDescription(task?.taskDescription);
  };

  const updateTask = () => {
    if (editingIndex !== -1 && newTask) {
      // Find the index of the task to update by ID
      const indexToUpdate = tasks.findIndex((task) => task.id === editingIndex);

      if (indexToUpdate !== -1) {
        // Create a new array to hold the updated tasks
        const updatedTasks = tasks.slice();

        // Update the properties of the task directly
        updatedTasks[indexToUpdate].taskTitle = newTask;
        updatedTasks[indexToUpdate].taskDescription = description;

        // Update the tasks array with the edited task
        setTasks(updatedTasks);

        // Clear the input fields and reset editingIndex
        setNewTask('');
        setDescription('');
        setEditingIndex(-1);
      }
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
        <Add addTask={() => addTask()} />
      ) : (
        <Update updateTask={() => updateTask()} />
      )}

      <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />
    </View>
  );
}
