import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Profile(props) {
  const user = {
    id: 1,
    name: 'John Smith',
    age: 30,
    location: 'New York',
    description: 'A software developer',
    imageUrl: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=is&k=20&c=PJjJWl0njGyow3AefY7KVNuhkbw5r2skqFiCFM5kyic=',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.details}>
        Age: {user?.age} - Location: {user?.location}
      </Text>
      <Text style={styles.description}>{user?.description}</Text>
    </View>
  );
}
