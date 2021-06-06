import React from 'react';
import { View, Text } from 'react-native';

import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import VisaLogo from '../../assets/visa-card.svg';
import MasterCardLogo from '../../assets/mastercard-card.svg';

export const CreditCard = ({ type, label, cardNumber }) => {

  return (
  <View style={{ marginBottom: 8, padding: 16, backgroundColor: COLORS.white, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      { type === 'visa' ? (
        <VisaLogo />
      ) : (
        <MasterCardLogo />
      )}

      <View style={{ marginLeft: 16 }}>
        <Text style={{ color: COLORS.black, ...typography.regular}}>{label}</Text>
        <Text style={{ color: COLORS.blackOpacity, ...typography.small}}>{cardNumber}</Text>
      </View>
    </View>
  </View>
)};
