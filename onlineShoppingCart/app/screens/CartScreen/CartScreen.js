// CartScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import cartStore from '../../mobx/cartStore';
import styles from './styles';

function CartScreen(props) {
  const { navigation } = props;

  // Access the cart items from the store
  const cartItems = cartStore.cartItems;

  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      {cartItems.map((item, key) => (
        <View
          key={key}
          style={[
            styles.view,
            {
              borderRadius: 8,
              backgroundColor: 'white',
            },
          ]}>
          <View style={[styles.imageText]}>
            <View style={[styles.viewText]}>
              <Text>{item?.title}</Text>
              <Text>{item?.count}</Text> 
            </View>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default observer(CartScreen);
