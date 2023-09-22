import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import styles from './styles';
import ProductComponent from '../../components/productComponent/productComponent';
import {
  BackButton,
  NextButton,
} from '../../components/Buttons/navigationButton';

function ProductScreen(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <ProductComponent />
        </View>
        <NextButton
          onPress={() => {
            navigation.navigate('CartScreen');
          }}
        />
        <BackButton
          onPress={() => {
            navigation.navigate('UserScreen');
          }}
        />
      </View>
    </View>
  );
}

export default observer(ProductScreen);
