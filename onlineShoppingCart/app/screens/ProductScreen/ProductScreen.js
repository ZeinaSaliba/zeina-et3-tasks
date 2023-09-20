import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {observer, useObserver} from 'mobx-react';
import cartStore from '../../mobx/cartStore';
import styles from './styles';
import ProductStore from '../../mobx/productStore';

function ProductScreen(props) {
    const {navigation} = props;

  const initialCart = [
    {id: 0, title: 'Tomatoes', count: 0},
    {id: 1, title: 'Apples', count: 0},
    {id: 2, title: 'Bananas', count: 0},
    {id: 3, title: 'Oranges', count: 0},
    {id: 4, title: 'Grapes', count: 0},
  ];

  const [cartCount, setCartCount] = useState(initialCart);

  const incrementProduct = id => {
    setCartCount(prevCart =>
      prevCart.map(product =>
        product.id === id ? {...product, count: product.count + 1} : product,
      ),
    );
  };

  const decrementProduct = id => {
    setCartCount(prevCart =>
      prevCart.map(product =>
        product.id === id && product.count > 0
          ? {...product, count: product.count - 1}
          : product,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {cartCount.map(product => (
            <View>
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
                    <Text>{product.title}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={{color: 'white', fontSize: 15}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    console.log('press');
                    navigation.navigate('CartScreen', {product: product.title})
                  }}
                  style={styles.addButton}>
                  <Text style={{color: 'white', fontSize: 15}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
export default observer(ProductScreen);
