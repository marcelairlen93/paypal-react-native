import React from 'react';
import { View, TouchableHighlight, Text, Dimensions } from 'react-native';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import ClearButton from '../../assets/clear-digit-icon.svg';

const buttons = [
  [
    {
      value: '1'
    },
    {
      value: '2'
    },
    {
      value: '3'
    },
  ],
  [
    {
      value: '4'
    },
    {
      value: '5'
    },
    {
      value: '6'
    },
  ],
  [
    {
      value: '7'
    },
    {
      value: '8'
    },
    {
      value: '9'
    },
  ],
  [
    {
      value: '0'
    },
    {
      value: 'clear',
    },
  ],
];

const { width , height } = Dimensions.get('window');

const keyboardButtonSize = ((width) / 4) - 16;

export const Keyboard = ({ onChangeText }) => (
  <View style={{ flex: 1 }}>
    {buttons.map((line, index) => (
      <View key={index.toString()} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {line.map(({ value }) => (
          <TouchableHighlight
            style={{ backgroundColor: COLORS.white, width: keyboardButtonSize, height: keyboardButtonSize, justifyContent: 'center', alignItems: 'center', margin: 8, borderRadius: keyboardButtonSize }}
            underlayColor={COLORS.primary}
            onPress={() => onChangeText(value)}
            activeOpacity={0.6}
          >
            { value !== 'clear' ? (
              <Text style={{ color: COLORS.black, ...typography.bold, fontSize: 24 }}>
                {value}
              </Text>
            ) : (
              <ClearButton />
            )}
          </TouchableHighlight>
        ))}
      </View>
    ))}
  </View>
);
