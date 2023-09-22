import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CartComponent from '../../components/CartComponent/cartComponent';
import {BackButton} from '../../components/Buttons/navigationButton';

function CartScreen(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <CartComponent />
      <BackButton
        onPress={() => {
          navigation.navigate('ProductScreen');
        }}
      />
    </View>
  );
}

export default CartScreen;
