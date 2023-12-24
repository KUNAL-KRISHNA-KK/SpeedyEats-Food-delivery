import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen
          name="CartScreen"
          options={{presentation: 'modal'}}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPreparingScreen"
          options={{presentation: 'modal'}}
          component={OrderPreparingScreen}
        />
        <Stack.Screen
          name="DeliveryScreen"
          options={{presentation: 'modal'}}
          component={DeliveryScreen}
        />
        <Stack.Screen
          name="AboutScreen"
          // options={{presentation: 'modal'}}
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
