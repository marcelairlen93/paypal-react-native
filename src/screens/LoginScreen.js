import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions, KeyboardAvoidingView, Platform, TextInput, SafeAreaView, TouchableOpacity, StatusBar as Bar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Logo from '../../assets/logo.svg';
import { COLORS } from '../config/colors';
import { typography } from '../config/typography';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <StatusBar style="dark" backgroundColor={COLORS.gray} />
        <View style={{ flex: 1, paddingHorizontal: 56 }} >
          
          <View style={{ alignSelf: 'center', paddingVertical: height / 6, marginTop: Bar.currentHeight }}>
            <Logo />
          </View>

          <TextInput
            placeholder="Nome de usuário ou e-mail"
            style={{ marginBottom: 16, borderWidth: 2, borderRadius: 20, borderColor: COLORS.black10, paddingVertical: 20, paddingHorizontal: 36, ...typography.small, color: COLORS.blackOpacity }}
            value={login}
            onChangeText={(value) => setLogin(value)}
          />
          <TextInput
            placeholder="Digite sua senha"
            style={{ borderWidth: 2, borderRadius: 20, borderColor: COLORS.black10, paddingVertical: 20, paddingHorizontal: 36, ...typography.small, color: COLORS.blackOpacity }}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />

          <TouchableOpacity
            style={{ backgroundColor: COLORS.primaryShade, paddingVertical: 20, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginVertical: 32 }}
            onPress={() => navigation.replace('Home')}
          >
            <Text style={{ color: COLORS.white, ...typography.bold }}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: 'center', paddingVertical: 30}}>
            <Text style={{ color: COLORS.blackOpacity, ...typography.small}}>Problemas para entrar?</Text>
          </TouchableOpacity>

          <View style={{ width: 65, alignSelf: 'center', height: 2, backgroundColor: COLORS.gray, marginBottom: 24 }} />

          <TouchableOpacity style={{ alignSelf: 'center', paddingBottom: 56}} onPress={() => {}}>
            <Text style={{ color: COLORS.blackOpacity, ...typography.small}}>Cadastrar</Text>
          </TouchableOpacity>
          
        </View>
    </SafeAreaView>
  )
};

export {
  LoginScreen
};
