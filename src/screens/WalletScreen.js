import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StatusBar as Bar, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import LogoShadow from '../../assets/logo-shadow.svg';
import EditButton from '../../assets/edit-button-light.svg';
import AddButtonLight from '../../assets/add-button-light.svg';

import Avatar from '../../assets/avatar.jpg';
import { CreditCard } from '../components/CreditCard';

const { width, height } = Dimensions.get('window');

const cardsDefault = [
  {
    label: 'Roxinho',
    flag: 'visa',
    number: '4*** **** ****2 4746',
  },
  {
    label: 'Inter',
    flag: 'mastercard',
    number: '4*** **** ****2 4746',
  },
  {
    label: 'C6',
    flag: 'mastercard',
    number: '4*** **** ****2 4746',
  },
  {
    label: 'American Express',
    flag: 'visa',
    number: '4*** **** ****2 4746',
  },
  {
    label: 'Black',
    flag: 'visa',
    number: '4*** **** ****2 4746',
  },
];

export const WalletScreen = () => {
  const [cards, setCards] = useState(cardsDefault);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <StatusBar style="light" />

      <View style={{ backgroundColor: COLORS.primaryDark, paddingBottom: 24 }}>
        <View style={{ position: 'absolute', top: -(36 + Bar.currentHeight), left: -(width / 2), opacity: 0.5 }}><LogoShadow /></View>

        <View style={{ paddingTop: Bar.currentHeight, position: 'relative', paddingBottom: 80 }}>
          <Header light title="Sua carteira" rightIconComponent={<EditButton />} />

          <View style={{ width: 147, height: 147, borderRadius: 147, borderColor: COLORS.white, borderWidth: 2, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'absolute', bottom: -80, left: (width / 2) - (147 / 2)}}>
            <Image source={Avatar} style={{ width: 147, height: 147 }} resizeMode="contain" />
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 90, paddingHorizontal: 32 }}>
        <Text style={{ color: COLORS.blackOpacity, ...typography.small, fontSize: 16, paddingBottom: 24 }}>Informações pessoais</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ paddingRight: 36 }}>
            <Text style={{ color: COLORS.black, ...typography.regular, paddingBottom: 16 }}>Nome</Text>
            <Text style={{ color: COLORS.black, ...typography.regular, paddingBottom: 16 }}>E-mail</Text>
            <Text style={{ color: COLORS.black, ...typography.regular, paddingBottom: 16 }}>Telefone</Text>
          </View>
          <View>
            <Text style={{ color: COLORS.black, ...typography.bold, paddingBottom: 16 }}>Marcel Souza</Text>
            <Text style={{ color: COLORS.black, ...typography.bold, paddingBottom: 16 }}>example@email.com</Text>
            <Text style={{ color: COLORS.black, ...typography.bold, paddingBottom: 16 }}>+55 (21) 99923-5766</Text>
          </View>
        </View>
        
      </View>

      <View style={{ flex: 1, paddingTop: 36, paddingHorizontal: 32 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: COLORS.blackOpacity, ...typography.small, fontSize: 16 }}>Seus Cartões</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {}}
          >
            <AddButtonLight />
            <Text style={{ color: COLORS.blackOpacity, ...typography.small, fontSize: 16, paddingLeft: 8 }}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cards}
          style={{ flex: 1, marginTop: 16 }}
          keyExtractor={({ label }) => label}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ paddingBottom: index === cards.length - 1 ? 12 : 0 }}>
              <CreditCard type={item.flag} label={item.label} cardNumber={item.number} />
            </View>
          )}
        />
      </View>
    </View>
  );
};
