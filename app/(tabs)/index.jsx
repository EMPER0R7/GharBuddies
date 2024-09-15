import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homescreen from '../../src/screen/Homescreen.jsx';
import LoginScreen from '../../src/screen/LoginScreen.jsx';
import  SignupScreen from '../../src/screen/SignupScreen.jsx';
import Dashboard from '../../src/screen/Dashboard.jsx';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="LOGIN" component={LoginScreen} />
      <Stack.Screen name="SIGNUP" component={SignupScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})