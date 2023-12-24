import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../Navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import DishRow from '../components/DishRow';
import CartIcon from '../components/cartIcon';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../slices/restaurantSlice';

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const {params} = useRoute();
  const dispatch = useDispatch();
  let item = params;

  useEffect(() => {
    dispatch(setRestaurant({...item}));
  }, []);

  return (
    <SafeAreaView>
      <View className="relative">
        <Image className="w-full h-60" source={item.image} />
        <TouchableOpacity
          className="absolute mt-5 ml-4"
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-circle" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <View className="bg-white rounded-t-3xl p-2 -mt-12">
          <Text className="text-3xl font-bold text-black mt-2">
            {item.name}
          </Text>
          <View className="flex-row">
            <View className=" flex-row mt-2 ml-2">
              <Icon name="star" size={26} color="yellow" />
              <Text className="text-green-400 text-md mt-1 ">{item.stars}</Text>
              <Text className="text-md mt-1   text-black">
                {' '}
                Reviews-{item.reviews}
              </Text>
              <Text className="text-md mt-1 ml-2  text-black font-semibold ">
                {item.category}
              </Text>
            </View>
            <View className=" flex-row ml-2 mt-2 ">
              <Icon name="location-outline" size={26} color="black" />
              <Text className="text-md mt-1   text-black">
                {' '}
                Nearby-{item.address}
              </Text>
            </View>
          </View>
          <View>
            <Text className="ml-3">{item.description}</Text>
            <Text className="font-bold text-black text-xl mt-1 ml-2">Menu</Text>
          </View>
        </View>
      </View>
      <View>
        <ScrollView className="h-72 relative">
          {item.dishes.map((dish, index) => (
            <DishRow item={{...dish}} key={index} />
          ))}
        </ScrollView>

        <CartIcon />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
