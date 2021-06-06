import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Dimensions, StatusBar as Bar, Image } from 'react-native';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import LogoShadow from '../../assets/logo-shadow.svg';
import LogoWhite from '../../assets/logo-white.svg';

import Avatar from '../../assets/avatar.jpg'

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray}}>
      <StatusBar style='light' />
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
            <Text style={{ color: COLORS.gray, ...typography.regular}}>Hello, Marcel!</Text>
            <Text style={{ color: COLORS.white, ...typography.bold, fontSize: 40, paddingTop: 32}}>R$ 4.525,79</Text>
            <Text style={{ color: COLORS.white, ...typography.regular }}>Your Balance</Text>
          </View>
        </View>


      </View>
    </View>
  );
};

export {
  HomeScreen,
};
