import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export function NextButton(props) {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.goNext} onPress={onPress}>
      <Text>Go Next</Text>
    </TouchableOpacity>
  );
}

export function BackButton(props) {
  const {onPress} = props;
  return (
    <TouchableOpacity
      style={{backgroundColor: 'lightgreen'}}
      onPress={onPress}>
      <Text>Go Back</Text>
    </TouchableOpacity>
  );
}
