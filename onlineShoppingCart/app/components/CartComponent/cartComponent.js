import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import cartStore from '../../mobx/cartStore';
import styles from './styles';

function cartComponent() {
  const cartItems = cartStore.cartItems;

  return (
    <View>
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
    </View>
  );
}

export default observer(cartComponent);
