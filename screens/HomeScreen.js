import {View, Text, Button, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {BaseRouter, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Catagories from '../components/catagories';
import { Indian, Italian, categories, featured } from '../constants/const';
import FeaturedRow from '../components/FeaturedRow';
import AboutScreen from './AboutScreen';



export default function HomeScreen() {

  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <View className="bg-white flex-row  ">
        <View className=" border ml-5 mt-5 mb-5 rounded-full border-slate-300 flex flex-row ">
          <TouchableOpacity>
          <View className="m-2">
            <Icon name="search" size={40} color="black" />
          </View>
          </TouchableOpacity>
          <TextInput className=" w-36" placeholder="Restaurants" />
          <Text className=" text-2xl mt-2 text-gray-300">I</Text>
          <TouchableOpacity>
          <View className="ml-1 mt-2">
            <Icon name="location-pin" size={40} color="black" />
          </View>
          </TouchableOpacity>
          <Text className=" text-sm mt-4 mr-4 text-gray-600">Delhi,IND</Text>
        </View>
        <TouchableOpacity >   
        <View className=" my-6 ml-3 p-1 bg-orange-500 rounded-full">
          <Icon name="tune" size={40} color="black" />
        </View>
        </TouchableOpacity>
      </View>

   
    <Catagories/>



    <ScrollView className=" bg-gray-100 mb-60" 
    showsVerticalScrollIndicator={false}
    >
      {
        [featured,Indian,Italian].map((item,index)=>{
         return(
          <FeaturedRow 
          key={index}
          title={item.title}
          description={item.description}
          restaurants={item.restaurants}
        
          />
         )

        })
      }

    </ScrollView>
    
    </SafeAreaView>
  );
}
