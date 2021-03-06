import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ActivityScreen } from '../screens/ActivityScreen';
import { SendMoneyScreen } from '../screens/SendMoneyScreen';
import { ContactsScreen } from '../screens/ContactsScreen';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Contatos" component={ContactsScreen} />
    <Stack.Screen name="Movimentacoes" component={ActivityScreen} />
    <Stack.Screen name="Enviar Dinheiro" component={SendMoneyScreen} />
  </Stack.Navigator>
);

export {
  HomeScreenNavigator,
};
