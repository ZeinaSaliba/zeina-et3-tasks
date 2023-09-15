import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';//importing file styles 

// Define a React component named Buttons
export default function buttons(props) {
  // Destructure props to extract the required functions and the type
  const {plusCount, minusCount, resetCount, next, previous, type} = props;

  // Define a function to render different button types based on the 'type' prop
  const getInput = type => {
    switch (type) {
      case 'buttonsCounterApp':
        return (
          <View style={styles.container}>
            {/* Button for increasing count */}
            <TouchableOpacity style={styles.plus} onPress={plusCount}>
              <Text style={styles.textPlus}>+ </Text>
            </TouchableOpacity>
            {/* Button for decreasing count */}
            <TouchableOpacity style={styles.plus} onPress={minusCount}>
              <Text style={styles.textMinus}> - </Text>
            </TouchableOpacity>
            {/* Button for resetting count */}
            <TouchableOpacity onPress={resetCount}>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
        );
        break;
      case 'nextButton':
        return (
          <View>
            {/* Button for navigating to the next page */}
            <TouchableOpacity onPress={next}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        );
        break;
      case 'previousButton':
        return (
          <View>
            {/* Button for navigating to the previous page */}
            <TouchableOpacity onPress={previous}>
              <Text>Previous</Text>
            </TouchableOpacity>
          </View>
        );
        break;
      default:
        // If 'type' doesn't match any case, return null (no button)
        null;
        break;
    }
  };
  // Render the appropriate button based on the 'type' prop
  return getInput(type);
}
