import { View, Text,ScrollView,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants/const'
import { useNavigation } from '@react-navigation/native';

export default function Catagories() {
  const [activeCategory,setActiveCategory]=useState(null);
  

  return (
    <ScrollView horizontal={true}  className="bg-white  pb-2" showsHorizontalScrollIndicator={false} >
       
      {
        categories.map((item,index)=>{
          
          let isActive=item.id==activeCategory;
          let btnClass=isActive?"bg-white":"bg-black";
          let textClass=isActive?"font-semibold text-gray-800":"text-gray-500";
          return(
            <View>
               <TouchableOpacity 
               key={index}
               onPress={()=>setActiveCategory(item.id)}
               className={'mr-2 mt-3 mb-2 ml-5 p-1 bg-gray-300 rounded-full '+btnClass}>
             <Image style={{width:45,height:45,borderRadius:20}} source={item.image}/> 
            </TouchableOpacity>
            <Text className={'ml-5  mr-2 text-sm mb-12 ' +textClass}>{item.name}</Text>
            </View>
          )
        })
      }
       
      </ScrollView>
  )
}