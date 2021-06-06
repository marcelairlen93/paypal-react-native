import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

const ActivityScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ color: COLORS.black, ...typography.bold}}>Activity Screen!</Text>
    </View>
  );
};

export {
  ActivityScreen,
};
