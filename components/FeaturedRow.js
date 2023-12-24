import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Restaurants from './Restaurant'

export default function FeaturedRow({title,description,restaurants}) {
  return (
   <ScrollView   >
     <View className="flex-row justify-between mt-2 ml-2 mb-1 ">
        <View>
            <Text className="font-bold text-lg  text-black ml-2">{title}</Text>
            <Text className="text-gray-500 text-xs ml-2">{description}</Text>
            
        </View>
        <TouchableOpacity>
            <Text className="text-orange-500 font-bold m-1">See All</Text>
        </TouchableOpacity>
    </View>

    <ScrollView  horizontal className=""
    showsHorizontalScrollIndicator={false}>
        {
            restaurants.map((restaurant,index)=>{
                return(
                    <Restaurants
                    item={restaurant}
                    key={index}
                    />
                )
            })
        }

    </ScrollView>
   
   </ScrollView>
    
  )
}

const styles = StyleSheet.create({})