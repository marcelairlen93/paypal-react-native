import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from '../../assets/back-button.svg';
import BackButtonLight from '../../assets/back-button-light.svg';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

export const Header = ({ back, title, rightIconComponent, rightIconOnPress = () => {}, light}) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 24 }}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          { light ? (
            <BackButtonLight />
          ) : (
            <BackButton />
          )}
        </TouchableOpacity>
      ) : (
        <View style={{width: 20, height: 20}} />
      )}

      <Text style={{ color: light ? COLORS.white : COLORS.black, ...typography.bold }}>
        {title}
      </Text>

      <TouchableOpacity onPress={rightIconOnPress}>
        { rightIconComponent ?? <View style={{width: 20, height: 20}} />}
      </TouchableOpacity>
    </View>
  );
};
