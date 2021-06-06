import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

const ContactsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ color: COLORS.black, ...typography.bold}}>Contacts Screen!</Text>
    </View>
  );
};

export {
  ContactsScreen,
};
