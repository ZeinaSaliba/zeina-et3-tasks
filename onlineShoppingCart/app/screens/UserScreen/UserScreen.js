import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import userStore from '../../mobx/userStore'; 
import styles from './styles';
import {NextButton} from '../../components/Buttons/navigationButton';

function UserScreen(props) {
  const user = userStore.user;
  const {navigation} = props;
  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <View>
        <Image source={{uri: user?.userImage}} style={styles.image} />
        <Text>User Information</Text>
        <Text>Username: {user?.username}</Text>
        <Text>Email: {user?.email}</Text>
        <Text>User ID: {user?.userID}</Text>
        <Text>Description: {user?.userDescription}</Text>
        <Text>Age: {user?.age}</Text>
        <Text>Country: {user?.country}</Text>
        <Text>Location: {user?.location}</Text>
      </View>
      <NextButton
        onPress={() => {
          navigation.navigate('ProductScreen');
        }}
      />
    </View>
    </View>
  );
}

export default observer(UserScreen);
