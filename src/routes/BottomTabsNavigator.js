import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenNavigator } from './HomeScreenNavigator';
import { ContactsScreen } from '../screens/ContactsScreen';
import { WalletScreen } from '../screens/WalletScreen';

import HomeIcon from '../../assets/home-icon.svg';
import ContactsIcon from '../../assets/contacts-icon.svg';
import WalletIcon from '../../assets/wallet-icon.svg';
import SettingsIcon from '../../assets/settings-icon.svg';
import HomeIconActive from '../../assets/home-icon-active.svg';
import ContactsIconActive from '../../assets/contacts-icon-active.svg';
import WalletIconActive from '../../assets/wallet-icon-active.svg';
import SettingsIconActive from '../../assets/settings-icon-active.svg';

import { COLORS } from '../config/colors';
import { typography } from '../config/typography';
import { useState } from 'react/cjs/react.development';
import { contacts } from '../config/contactsMock';
import { getTransactions } from '../config/activitiesMock';
import { AppContext } from '../context/AppContext';
import { ContactsScreenNavigator } from './ContactsScreenNavigator';


const Tab = createBottomTabNavigator();

const transactionsDefault = getTransactions();

const balanceDefault = transactionsDefault.reduce((acc, { value }) => acc + value, 0);

const BottomTabs = () => {
  const [contactsList, setContactsList] = useState(contacts);
  const [transactions, setTransactions] = useState(transactionsDefault);
  const [balance, setBalance] = useState(balanceDefault);


  return (
    <AppContext.Provider value={{
      contacts: [contactsList, setContactsList],
      activities: [transactions, setTransactions],
      balance: [balance, setBalance],
    }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          tabBarOptions={{
            labelPosition: 'beside-icon',
            activeTintColor: COLORS.primary,
            inactiveTintColor: '#243656',
            style: {
              height: 70,
              borderTopLeftRadius: 40,
              paddingHorizontal: 40,
            },
          }}
          screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => {
              return <Text style={{ color: COLORS.primary, ...typography.small, marginLeft: 16 }}>{focused ? route.name : ''}</Text>
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreenNavigator} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <HomeIconActive />
              }
              return <HomeIcon />
            }
          }} />
          <Tab.Screen name="Contatos" component={ContactsScreenNavigator} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <ContactsIconActive />
              }
              return <ContactsIcon />
            }
          }}  />
          <Tab.Screen name="Carteira" component={WalletScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <WalletIconActive />
              }
              return <WalletIcon />
            }
          }}  />
          <Tab.Screen name="Configs" component={WalletScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <SettingsIconActive />
              }
              return <SettingsIcon />
            }
          }}  />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export {
  BottomTabs,
};
