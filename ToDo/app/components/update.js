import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';

export default function update(props) {
    const {updateTask} = props
    return (
        <TouchableOpacity onPress={updateTask}>
          <Text style={{ backgroundColor: 'lightgreen', padding: 10 }}>
            Update Task
          </Text>
        </TouchableOpacity>
    )}