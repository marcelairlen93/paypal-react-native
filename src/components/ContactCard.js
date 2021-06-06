import React from 'react';
import { View, Text } from 'react-native';

import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

export const ContactCard = ({ contactName, email, preffix, style }) => {

  return (
  <View style={{ marginBottom: 8, padding: 16, backgroundColor: COLORS.white, borderRadius: 20, flexDirection: 'row', alignItems: 'center', ...style }}>
    <View style={{ width: 48, height: 48, backgroundColor: COLORS.black10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: COLORS.black, ...typography.bold }}>
        {contactName.charAt(0)}
      </Text>
    </View>

    <View style={{ marginLeft: 16 }}>
      { preffix && (
        <Text style={{ color: COLORS.blackOpacity, ...typography.small}}>{preffix}</Text>
      )}
      <Text style={{ color: COLORS.black, ...typography.regular}}>{contactName}</Text>
      <Text style={{ color: COLORS.blackOpacity, ...typography.small}}>{email}</Text>
    </View>
  </View>
)};
