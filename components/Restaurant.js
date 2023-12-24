import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import RestaurantScreen from '../screens/RestaurantScreen';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Restaurants({item}) {

  const navigation=useNavigation();

  return (
    <View>
     <TouchableOpacity className="ml-1 mb-1  " onPress={()=>navigation.navigate('RestaurantScreen',{...item})}>
      
      <View className=" mr-2 mt-2 rounded-3xl bg-white shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
        <View className=''>
          <Text className="text-xl font-bold ml-2 mt-1 text-black">{item.name}</Text>
          <View className=" flex-row mt-2 ml-2">
          <Icon  name="star" size={26} color="yellow" />
          <Text className="text-green-400 text-md mt-1 ml-1">{item.stars}</Text>
          <Text className="text-md mt-1 ml-1  text-black"> Reviews-{item.reviews}</Text>
          <Text className="text-md mt-1 ml-3  text-black font-semibold  " >{item.category}</Text>
          </View>
          <View className=" flex-row m-2">
         <Icon  name="location-outline" size={22} color="black" />
          <Text className="text-md   text-black"> Nearby-{item.address}</Text>
          </View>
        </View>

      </View>

     </TouchableOpacity>
    </View>
  )
}

