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

function CartScreen(props) {
  

  const {navigation, route} = props;

  return (
    <View style={styles.container}>
      
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
                <Text>{route.params.product}</Text>
                <Text>1</Text>
              </View>
            </View>
          </View>
      </View>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}><Text>Go Back</Text></TouchableOpacity>
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
