import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
// import Icon from "react-native-vector-icons/Entypo";
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
// import {featured} from '../constants/const';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant} from '../slices/restaurantSlice';
import { selectCartTotal } from '../slices/cartSlice';

export default function CartScreen() {
  // const restaurant = useSelector(selectRestaurant)
  const cartItems=useSelector((state)=>state.cart.items)
  const subTotal=useSelector(selectCartTotal);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row m-3">
        {/* <Icon name="arrow-back-circle" size="25"/> */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-circle" size={50} color="orange" />
        </TouchableOpacity>

        <View>
          <Text className="font-bold text-2xl text-black ml-20 mt-1">
            Your Cart
          </Text>
          <Text className="ml-24">kk</Text>
        </View>
      </View>

      <View className="flex-row bg-orange-200 h-20 mt-1 ">
        <Image
          className="w-20 h-20 m-1"
          source={require('../assets/images/bikeGuy.png')}
        />

        <Text className="font-semibold text-md text-black m-7">
          Delivery in 20-30 minutes
        </Text>

        <TouchableOpacity>
          <Text className="font-semibold ml-7 mt-5 text-orange-500 text-lg">
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="h-80" showsVerticalScrollIndicator={false}>
        {cartItems.map((dish,index) => {
          return <View key={index} className="bg-white h-20 m-1 rounded-3xl flex-row">
             <Text className="font-bold text-lg text-orange-500 m-5">1 x</Text>

             <Image className="h-14 w-14 rounded-full mt-2 " source={dish.image} />
             <Text className="font-bold text-gray-600 text-lg  m-5">{dish.name}</Text>

             <View className='ml-auto'>
             <Text className="font-bold text-gray-600 text-lg  mt-5">${dish.price}</Text>
             </View>
          </View>;
        })}
      </ScrollView>

      <View className="bg-orange-200 h-44 rounded-3xl">
        <View className="flex-row justify-between m-3 mb-1  ">
          <Text className="ml-2  text-black">Sub Total</Text>
          <Text className="mr-2  text-black">${subTotal}</Text>
        </View>

        <View className="flex-row justify-between m-3 mb-1">
          <Text className="ml-2  text-black">Delivery Fee</Text>
          <Text className="mr-2  text-black">$2</Text>
        </View>

        <View className="flex-row justify-between m-3 mb-1">
          <Text className="font-bold text-md text-black ml-2">Order Total</Text>
          <Text className="font-bold text-md text-black mr-2">${subTotal+2}</Text>
        </View>

        <TouchableOpacity className="h-14 rounded-full bg-orange-400 m-3 " onPress={()=>navigation.navigate('OrderPreparingScreen')}>
            <Text className="text-xl font-bold text-white ml-36 mt-3">Place Order</Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
