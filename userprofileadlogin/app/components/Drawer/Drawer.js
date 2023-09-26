import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useTranslation} from 'react-i18next';
import styles from './styles';
function CustomDrawerContent(props) {
  const {t, i18n} = useTranslation();
  const {navigation} = props;
  const [languageActive, setLanguageActive] = useState(true);

  const user = {
    name: 'John Smith',
    imageUri:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1056.jpg',
  };

  const handleLogout = () => {
    navigation.navigate('Login');
    navigation.closeDrawer(); 
  };

  const toggleLanguage = () => {
    if (languageActive) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ar');
    }
    setLanguageActive(!languageActive);
    navigation.closeDrawer(); 
  };

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View>
          <Image style={styles.image} source={{uri: user?.imageUri}} />
          <Text style={[{fontSize: 17, fontWeight: 'bold'}]}>{user?.name}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label={t('logout')} onPress={handleLogout} />
      <DrawerItem
        label={languageActive ? 'AR' : 'ENG'}
        onPress={toggleLanguage}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
