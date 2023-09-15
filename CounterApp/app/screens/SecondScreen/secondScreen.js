import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Buttons from '../../components/Buttons/buttons';
import {useNavigation} from '@react-navigation/native';
// same as MainScreen but in reverse
export default function SecondScreen(props) {
  const [previous, setPrevious] = useState('SecondScreen');
  const navigation = useNavigation();

  useEffect(() => {
    if (previous != 'SecondScreen') {
      navigation.navigate("MainScreen");
    }
  }, [navigation, previous]);
  return (
    <View>
      <Text>secondScreen</Text>
      <Buttons
        type={'previousButton'}
        previous={() => {
         setPrevious('MainScreen');
        }}
      />
    </View>
  );
}
