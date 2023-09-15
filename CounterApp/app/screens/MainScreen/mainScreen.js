import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Buttons from '../../components/Buttons/buttons'; //import button component
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
export default function MainScreen() {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState('MainScreen'); // Initialize 'next' with 'MainScreen'
  const navigation = useNavigation();

  useEffect(() => {
    setNext('MainScreen'); // Set 'next' to 'MainScreen' initially
    if (next != 'MainScreen') {
      // If 'next' is not 'MainScreen', navigate to 'SecondScreen'
      navigation.navigate('SecondScreen');
    }
  }, [count, navigation, next]);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  const inputs = [
    {
      type: 'buttonsCounterApp',
      plusCount: () => plusCount(),
      minusCount: () => minusCount(),
      resetCount: () => resetCount(),
    },
    {
      type: 'nextButton',
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      {inputs.map((item, key) => (
        <Buttons
          key={key}
          type={item?.type}
          plusCount={item?.plusCount}
          minusCount={item?.minusCount}
          resetCount={item?.resetCount}
          next={() => {
            // When next button is pressed, set 'next' to 'SecondScreen'
            setNext('SecondScreen');
          }}
        />
      ))}
    </View>
  );
}
