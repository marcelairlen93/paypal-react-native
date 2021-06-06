import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactsScreen } from '../screens/ContactsScreen';
import { SendMoneyScreen } from '../screens/SendMoneyScreen';

const Stack = createStackNavigator();

const ContactsScreenNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Contatos" component={ContactsScreen} />
    <Stack.Screen name="Enviar Dinheiro" component={SendMoneyScreen} />
  </Stack.Navigator>
);

export {
  ContactsScreenNavigator,
};
