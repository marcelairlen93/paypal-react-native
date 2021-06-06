import React from 'react';
import { View, Text } from 'react-native';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ptBRLocale from 'date-fns/locale/pt-BR';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';
import { formatCurrency } from '../config/utils';

export const ActivityCard = ({ contactName, timestamp, value }) => {

  return (
  <View style={{ marginBottom: 8, padding: 16, backgroundColor: COLORS.white, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: 32, height: 32, backgroundColor: COLORS.gray, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: COLORS.black, ...typography.bold }}>
          {contactName.charAt(0)}
        </Text>
      </View>

      <View style={{ marginLeft: 16 }}>
        <Text style={{ color: COLORS.black, ...typography.regular}}>{contactName}</Text>
        <Text style={{ color: COLORS.blackOpacity, ...typography.small}}>{formatDistanceToNow(timestamp, { locale: ptBRLocale })}</Text>
      </View>
    </View>
    
    <View style={{  }}>
      <Text style={{ color: value > 0 ? COLORS.green : COLORS.red, ...typography.bold, fontSize: 16 }}>
        { formatCurrency(value) }
      </Text>
    </View>
  </View>
)};
