import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput;
