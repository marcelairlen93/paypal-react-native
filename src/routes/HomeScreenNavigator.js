import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ActivityScreen } from '../screens/ActivityScreen';
import { SendMoneyScreen } from '../screens/SendMoneyScreen';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Activities" component={ActivityScreen} />
    <Stack.Screen name="Send Money" component={SendMoneyScreen} />
  </Stack.Navigator>
);

export {
  HomeScreenNavigator,
};
