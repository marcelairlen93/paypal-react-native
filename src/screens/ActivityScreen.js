import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity, StatusBar as Bar } from 'react-native';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import SearchButton from '../../assets/search-button.svg';
import { ActivityCard } from '../components/ActivityCard';
import { AppContext } from '../context/AppContext';
import { Header } from '../components/Header';

const activitiesButtons = [
  'Todas',
  'Entrada',
  'Saída'
];

const ActivityScreen = () => {
  const [buttonActive, setButtonActive] = useState(activitiesButtons[0]);
  const [activities] = useContext(AppContext).activities;
  const [transactionToShow, setTransactionsToShow] = useState(activities);

  const handleButtonChange = (item) => {
    setButtonActive(item);
    handleOptionChange(item);
  }

  const handleOptionChange = (item) => {
    if (item === 'Todas') {
      setTransactionsToShow(activities);
    } else if (item === 'Entrada') {
      setTransactionsToShow(activities.filter(({ value }) => value > 0));
    } else {
      setTransactionsToShow(activities.filter(({ value }) => value < 0));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray, marginTop: Bar.currentHeight }}>
      <StatusBar style='dark' backgroundColor={COLORS.gray} />

      <Header back title='Movimentações' rightIconComponent={<SearchButton />} />

      <View style={{ flex: 1, paddingHorizontal: 32, paddingTop: 24 }}>
        <View style={{ flexDirection: 'row', backgroundColor: COLORS.black10, borderRadius: 20, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' }}>
          { activitiesButtons.map((item, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={{ paddingVertical: 12, paddingHorizontal: 24, backgroundColor: buttonActive === item ? COLORS.primaryShade : 'transparent', borderRadius: 20 }}
              onPress={() => handleButtonChange(item)}
            >
              <Text style={{ color: buttonActive === item ? COLORS.white : COLORS.gray, ...typography.regular }}>
                {item}
              </Text>
            </TouchableOpacity>
          )) }
        </View>

        <FlatList
          data={transactionToShow}
          style={{ flex: 1, marginTop: 24 }}
          keyExtractor={({id}) => id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: { value, contact, timestamp }, index }) => (
            <View style={{ paddingBottom: index === transactionToShow.length - 1 ? 24 : 0 }}>
              <ActivityCard contactName={contact.name} timestamp={timestamp} value={value} />
            </View>
          )}
        />
      </View>
      
    </View>
  );
};

export {
  ActivityScreen,
};
