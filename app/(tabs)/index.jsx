import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homescreen from '../../src/screen/Homescreen.jsx';
import LoginScreen from '../../src/screen/LoginScreen.jsx';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={homescreen} />
      <Stack.Screen name="LOGIN" component={LoginScreen} />
      <Stack.Screen name="SIGNUP" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})