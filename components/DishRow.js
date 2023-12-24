import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemById } from '../slices/cartSlice';

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => selectCartItemById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const totalItemsCount = totalItems ? totalItems.length : 0; // Check if totalItems is defined

  return (
    <View>
      <View className="flex-row bg-white w-full h-24 mt-3 rounded-2xl">
        <Image className="h-24 w-24 rounded-2xl" source={item.image} />

        <View className="m-3">
          <Text className="text-black text-xl">{item.name}</Text>
          <Text>{item.description}</Text>
          <Text className="font-lg font-bold mt-2 text-black">${item.price}</Text>
        </View>

        <View className="flex-row  mt-10 ml-auto ">
          <TouchableOpacity onPress={handleDecrease}>
            <Icon name="circle-with-minus" size={40} color="orange" />
          </TouchableOpacity>

          {/* <Text className="m-2 text-gray-700">{totalItemsCount}</Text> */}
          

          <TouchableOpacity onPress={handleIncrease}>
            <Icon name="circle-with-plus" size={40} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
