import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { View, Text, StatusBar as Bar, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import { AppContext } from '../context/AppContext';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

import AddButton from '../../assets/add-button.svg';
import SearchIconLight from '../../assets/search-icon-light.svg';
import { ContactCard } from '../components/ContactCard';


const ContactsScreen = ({ navigation, route }) => {
  const title = route?.params?.title ?? 'Contatos';

  const [contacts] = useContext(AppContext).contacts;
  const [contactsToShow, setContactsToShow] = useState(contacts);
  const [search, setSearch] = useState('');

  const handleSearchChange = (value) => {
    setSearch(value);
    setContactsToShow(
      contacts.filter(({ first_name, last_name, email }) => {
        return first_name.toLowerCase().includes(value.toLowerCase()) ||
        last_name.toLowerCase().includes(value.toLowerCase()) ||
        email.toLowerCase().includes(value.toLowerCase());
      })
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray, marginTop: Bar.currentHeight }}>
      <StatusBar style="dark" backgroundColor={COLORS.gray} />

      <Header back={title !== 'Contatos'} title={title} rightIconComponent={title === 'Contatos' && <AddButton />} />

      <View style={{ flex: 1, paddingHorizontal: 32 }}>
        <View style={{ flexDirection: 'row', borderRadius: 20, borderWidth: 1, borderColor: COLORS.black10, padding: 16, alignItems: 'center' }}>
          <SearchIconLight />
          <TextInput
            style={{ marginHorizontal: 16, flex: 1, ...typography.small }}
            placeholder="Digite um nome ou email"
            value={search}
            onChangeText={(value) => handleSearchChange(value)}
            keyboardType="email-address"
          />
        </View>

        <FlatList
        data={contactsToShow}
        style={{ flex: 1, marginTop: 24 }}
        keyExtractor={({id}) => id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: { first_name, last_name, email }, index }) => (
          <TouchableOpacity
            style={{ paddingBottom: index === contactsToShow.length - 1 ? 24 : 0 }}
            onPress={() => navigation.navigate('Enviar Dinheiro', {
              contact: {
                name: `${first_name} ${last_name}`,
                email,
              }
            })}
          >
            <ContactCard contactName={`${first_name} ${last_name}`} email={email} />
          </TouchableOpacity>
        )}
      />
      </View>

    </View>
  );
};

export {
  ContactsScreen,
};
