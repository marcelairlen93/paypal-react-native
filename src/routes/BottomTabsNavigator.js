import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenNavigator } from './HomeScreenNavigator';
import { ContactsScreen } from '../screens/ContactsScreen';
import { WalletScreen } from '../screens/WalletScreen';

import HomeIcon from '../../assets/home-icon.svg';
import ContactsIcon from '../../assets/contacts-icon.svg';
import WalletIcon from '../../assets/wallet-icon.svg';
import SettingsIcon from '../../assets/settings-icon.svg';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: COLORS.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          if (focused) {
            return <Text style={{ color: COLORS.primary, ...typography.small, marginLeft: 24 }}>{route.name}</Text>
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreenNavigator} options={{
        tabBarIcon: ({ tintColor }) => (
          <HomeIcon fill={tintColor} />
      )
      }} />
      <Tab.Screen name="Contacts" component={ContactsScreen} options={{
        tabBarIcon: ({ tintColor }) => (
          <ContactsIcon fill={tintColor} />
      )
      }}  />
      <Tab.Screen name="Wallet" component={WalletScreen} options={{
        tabBarIcon: ({ tintColor }) => (
          <WalletIcon fill={tintColor} />
      )
      }}  />
      <Tab.Screen name="Settings" component={WalletScreen} options={{
        tabBarIcon: ({ tintColor }) => (
          <SettingsIcon fill={tintColor} />
      )
      }}  />
    </Tab.Navigator>
  </NavigationContainer>
);

export {
  BottomTabs,
};
