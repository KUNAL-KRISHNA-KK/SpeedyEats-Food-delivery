import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparingScreen() {

    const navigation=useNavigation();

    useEffect(()=>{   
        setTimeout(() => {
            navigation.navigate('DeliveryScreen')
        }, 3000);
    },[])

  return (
    <View className="flex-1 justify-center items-center bg-white ">
     <Image className="h-100 w-100" source={require('../assets/images/boy3.gif')}/>
    </View>
  )
}

const styles = StyleSheet.create({})