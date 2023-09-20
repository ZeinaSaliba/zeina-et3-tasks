import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {observer, useObserver} from 'mobx-react';
import cartStore from '../../mobx/cartStore';
import styles from './styles';

function CartScreen() {
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
                  <Text>Tomatoes</Text>
                </View>
              </View>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.addButton}>
                <Text style={{color: 'white', fontSize: 15}}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButton}>
                <Text style={{color: 'white', fontSize: 15}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View>
          <Text>Cart</Text>
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
                <Text>Tomatoes</Text>
                <Text>1</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default observer(CartScreen);

{
  /* <View>
<Text>Shopping Cart</Text>
<FlatList
  data={cartStore.cartItems}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <TouchableOpacity onPress={() => cartStore.removeFromCart(item)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  )}
/>
<Text>Total Items in Cart: {cartStore.cartCount}</Text>
</View> */
}

{
  /* <TextInput
        placeholder="Task Title"
        value={newTask}
        onChangeText={text => setNewTask(text)}
      />

      {editingIndex === -1 ? (
        <TouchableOpacity onPress={addTask}>
          <Text style={{backgroundColor: 'lightblue', padding: 10}}>
            Add Task
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={updateTask}>
          <Text style={{backgroundColor: 'lightgreen', padding: 10}}>
            Update Task
          </Text>
        </TouchableOpacity>
      )}

      {tasks.map(task => (
        <View
          key={task.id}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>{task.taskTitle}</Text>
          <TouchableOpacity onPress={() => editTask(task)}>
            <Text
              style={{
                backgroundColor: 'lightgreen',
                padding: 5,
                marginLeft: 10,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTask(task.id)}>
            <Text
              style={{backgroundColor: 'salmon', padding: 5, marginLeft: 10}}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      ))} */
}
