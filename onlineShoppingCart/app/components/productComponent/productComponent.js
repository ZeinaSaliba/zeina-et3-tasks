import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import cartStore from '../../mobx/cartStore';
import styles from './styles';
import productStore from '../../mobx/productStore';

function productComponent() {
  const products = productStore.products;

  return products.map((product, key) => (
    <View key={key}>
      <View
        style={[
          styles.view,
          {
            borderRadius: 8,
            backgroundColor: 'white',
          },
        ]}>
        <View style={[styles.imageText]}>
          <View style={[styles.viewText]}>
            <Text>{product?.title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            cartStore.removeFromCart(product);
          }} 
        >
          <Text style={{color: 'white', fontSize: 15}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            cartStore.addToCart(product);
          }}
          style={styles.addButton}>
          <Text style={{color: 'white', fontSize: 15}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  ));
}
export default observer(productComponent);
