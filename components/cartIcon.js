import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { cartLength, selectCartTotal } from '../slices/cartSlice';

export default function CartIcon() {

  const navigation=useNavigation();
  const itemCount=useSelector(state=>cartLength(state));
  const cartTotal=useSelector(selectCartTotal);


  if (itemCount===0 ){
    return;
  }
  
  // const cartItems = useSelector(selectCartItem);


  // if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
  //   return ; 
  // }

  return (
    <View className=" absolute mt-60 "  >
     <TouchableOpacity className='bg-orange-400 w-96 h-16 ml-4 mt-2  rounded-full' onPress={()=>navigation.navigate('CartScreen')}>
        <View className="flex-row justify-between">
            <Text className=' mt-4 font-extrabold text-lg text-white ml-7'>{itemCount}</Text>
            <Text className='font-extrabold text-xl text-white mt-4 ml-5'>View Cart</Text>
            <Text className='font-extrabold text-lg text-white mr-5 mt-4'>${cartTotal}</Text>
            

        </View>

     </TouchableOpacity>
    </View>
  )
}