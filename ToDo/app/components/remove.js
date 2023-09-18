import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';

export default function remove(props) {
    const {removeTask} = props
    return (
        <TouchableOpacity onPress={removeTask}>
            <Text
              style={{ backgroundColor: 'salmon', padding: 5, marginLeft: 10 }}
            >
              Remove
            </Text>
          </TouchableOpacity>
    )}