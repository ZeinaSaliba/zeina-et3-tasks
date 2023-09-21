import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import productStore from '../../mobx/productStore'; // Import the ProductStore
import cartStore from '../../mobx/cartStore';
import styles from './styles';

function ProductScreen(props) {
  const {navigation} = props;

  // Access the products from the ProductStore
  const products = productStore.products;

  return (
    <View style={styles.container}>
      <View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {products.map((product, key) => (
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
                  }} // Call your decrement function
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
          ))}
        </View>
        <TouchableOpacity
          style={styles.goNext}
          onPress={() => {
            navigation.navigate('CartScreen');
          }}>
          <Text>Go Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'lightgreen'}}
          onPress={() => {
            navigation.navigate('UserScreen');
          }}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default observer(ProductScreen);
