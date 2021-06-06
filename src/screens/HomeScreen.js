import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { View, Text, Dimensions, StatusBar as Bar, Image, FlatList } from 'react-native';

import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import LogoShadow from '../../assets/logo-shadow.svg';
import LogoWhite from '../../assets/logo-white.svg';

import Avatar from '../../assets/avatar.jpg';

import SendMoneyIcon from '../../assets/send-money-icon.svg';
import ReceiveMoneyIcon from '../../assets/receive-money-icon.svg';
import PixIcon from '../../assets/pix-icon.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppContext } from '../context/AppContext';
import { formatCurrency, spliceString } from '../config/utils';
import { ActivityCard } from '../components/ActivityCard';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [activities] = useContext(AppContext).activities;
  const [balance] = useContext(AppContext).balance;

  const navOptions = [
    {
      label: 'Transferir\nDinheiro',
      icon: <SendMoneyIcon />,
      onPress: () => navigation.navigate('Contatos', {
        title: 'Escolha um contato'
      }),
    },
    {
      label: 'Cobrar\nDinheiro',
      icon: <ReceiveMoneyIcon />,
      onPress: () => {},
    },
    {
      label: 'Pix',
      icon: <PixIcon />,
      onPress: () => {},
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray}}>
      <StatusBar style='light' backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: COLORS.primaryDark, paddingBottom: 24, borderBottomRightRadius: 36 }}>
          <View style={{ position: 'absolute', top: -(69 + Bar.currentHeight), left: -89, opacity: 0.3 }}><LogoShadow /></View>

          <View style={{ marginTop: Bar.currentHeight, paddingVertical: 24, paddingHorizontal: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <LogoWhite />

            <View style={{ width: 56, height: 56, alignItems: 'center', justifyContent: 'center', borderColor: COLORS.primary, borderRadius: 20, borderWidth: 2, position: 'relative' }}>
              <View style={{ width: 56, height: 56, borderColor: COLORS.primary, borderRadius: 20, borderWidth: 2, position: 'absolute', zIndex: 3 }} />
              <Image source={Avatar} style={{ width: 52, height: 52, borderRadius: 40, overflow: 'hidden' }} resizeMode="contain" />
            </View>
          </View>

          <View style={{ paddingHorizontal: 32 }}>
            <Text style={{ color: COLORS.gray, ...typography.regular}}>Olá, Marcel!</Text>
            <Text style={{ color: balance > 0 ? COLORS.white : COLORS.red, ...typography.bold, fontSize: 40, paddingTop: 32}}>{formatCurrency(balance)}</Text>
            <Text style={{ color: COLORS.white, ...typography.regular }}>Seu Saldo</Text>
          </View>
        </View>

        <View style={{ flex: 1, paddingTop: 24 }}>
          <FlatList
            data={navOptions}
            style={{ flex: 1, paddingLeft: 32 }}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{flex: 1, backgroundColor: index === 0 ? COLORS.primaryDark : COLORS.white, padding: 20, borderRadius: 20, marginRight: index === navOptions.length - 1 ? 64 : 16, width: 110, justifyContent: 'space-between' }}
                onPress={item.onPress}
              >
                <View style={{ paddingBottom: 24 }}>
                  {item.icon}
                </View>
                <Text style={{ color: index === 0 ? COLORS.white : COLORS. primaryShade, ...typography.bold, fontSize: 14 }}>
                  { item.label}
                </Text>
              </TouchableOpacity>
            )}
          />

          <View style={{ flex: 2, paddingTop: 36, paddingHorizontal: 32 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ color: COLORS.black, ...typography.bold }}>Movimentações</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Movimentacoes')}>
                <Text style={{ color: COLORS.blackOpacity, ...typography.small }}>Ver todas</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={activities.slice(0, 3)}
              style={{ flex: 1 }}
              keyExtractor={({ id }) => id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={{ paddingBottom: index === 2 ? 12 : 0 }}>
                  <ActivityCard contactName={item.contact.name} timestamp={item.timestamp} value={item.value} />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export {
  HomeScreen,
};
