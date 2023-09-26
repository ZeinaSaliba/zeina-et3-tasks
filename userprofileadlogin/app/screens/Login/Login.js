import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function Login(props) {
  const {navigation, route} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();

  const handleLogin = () => {
    // Check if the entered username and password are correct
    if (username === 'john' && password === '123') {
      if (route.name == 'Logins') {
        navigation.navigate('DrawerNavigator');
      } else if (route.name == 'Login') {
        navigation.navigate('BottomStack');
      }
    } else {
      // Show an error message or handle authentication failure
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('username')}
        placeholderTextColor="#b0b0b0"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={t('password')}
        placeholderTextColor="#b0b0b0"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>{t('login')}</Text>
      </TouchableOpacity>
    </View>
  );
}
