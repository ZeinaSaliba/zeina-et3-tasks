import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';

export default function edit(props) {
    const {editTask} = props
    return (
        <TouchableOpacity onPress={editTask}>
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
    )}