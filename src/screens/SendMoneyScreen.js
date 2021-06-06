import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StatusBar as Bar, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { ContactCard } from '../components/ContactCard';
import { Keyboard as KeyboardInScreen } from '../components/KeyboardInScreen';
import { Header } from '../components/Header';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';
import { formatCurrency } from '../config/utils';

const SendMoneyScreen = ({ navigation, route }) => {
  const { contact } = route.params;

  const [value, setValue] = useState(0);

  const handleValueChange = (newValue) => {
    const oldValue = parseInt(value.toString().replace(/\D/g, ''));
    if (newValue === 'clear' && oldValue > 0) {
      const oldValueString = oldValue.toString();
      newValue = parseInt(oldValueString.slice(0, oldValueString.length - 1) || 0) / 100;
    } else if (typeof parseInt(newValue) === 'number' && value < 9999999) {
      newValue = parseInt(oldValue.toString() + newValue) / 100;
    }

    if (newValue < 1000000) {
      setValue(newValue);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray, marginTop: Bar.currentHeight}}>
      <StatusBar style="dark" backgroundColor={COLORS.gray} />

      <Header back title="Enviar Dinheiro" />

      <View style={{ flex: 1, paddingHorizontal: 32 }}>
        <ContactCard preffix="To:" contactName={contact.name} email={contact.email} style={{ backgroundColor: COLORS.gray }} />

        <View style={{ marginVertical: 24, borderRadius: 20, borderColor: COLORS.primary, borderWidth: 2 }} >
          <TextInput
            autoFocus
            showSoftInputOnFocus={false}
            style={{ color: COLORS.black, ...typography.bold, fontSize: 40, paddingVertical: 8, paddingHorizontal: 24 }}
            value={formatCurrency(value)}
          />
        </View>

        <KeyboardInScreen onChangeText={handleValueChange} />
        
      </View>
    </View>
  );
};

export {
  SendMoneyScreen,
};
