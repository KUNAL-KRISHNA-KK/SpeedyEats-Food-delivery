import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {featured} from '../constants/const';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const Navigation=useNavigation();

  return (
    <View className="flex-1">
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View className=" rounded-3xl bg-white relative mb-2 ">
        <View className="flex-row">
          <View className="mt-8 ml-4">
            <Text className="text-black text-lg font-semibold">
              Estimated Arival
            </Text>
            <Text className="text-black text-3xl font-bold">20-30 Minutes</Text>
            <Text className="text-black  font-bold">
              Your order is on its way!
            </Text>
          </View>
          <View>
            <Image
              className="h-20 w-20 ml-20 mt-4 "
              source={require('../assets/images/bikeGuy2.gif')}
            />
          </View>
        </View>

        <View className="h-20 bg-orange-400 mx-2 mt-4 rounded-full flex-row">
          <Image className="h-16 w-16 rounded-full m-2" source={require('../assets/images/deliveryGuy.png')}/>

          <View className="mt-3 ml-2">
            <Text className="text-lg font-bold text-white -mb-1"> Kunal Krishna</Text>
            <Text  className="text-lg  text-white"> Your Rider</Text>

          </View>

          <View className='flex-row ml-16'>
            <TouchableOpacity  className="bg-white rounded-full my-4 p-3 "><Icon  name="call" size={25} /></TouchableOpacity>
            <TouchableOpacity className= " bg-white rounded-full my-4 p-3 ml-2 "
            onPress={()=>Navigation.navigate('HomeScreen')}
            ><Icon  name="close" size={25} /></TouchableOpacity>


          </View>

        </View>
      </View>
    </View>
  );
}

//  AIzaSyDpytvKHVfcC0CZaUk6tsbm1QiIgfn7K4c
