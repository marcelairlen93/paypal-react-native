import 'react-native-gesture-handler';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { useFonts, Manrope_400Regular as ManropeRegular, Manrope_600SemiBold as ManropeSemiBold } from '@expo-google-fonts/manrope';
import AppLoading from 'expo-app-loading';
import { BottomTabs } from './src/routes/BottomTabsNavigator';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    ManropeRegular,
    ManropeSemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
