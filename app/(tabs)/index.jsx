import { StyleSheet, Text, View ,ActivityIndicator } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { useEffect, useState } from 'react';

import { auth } from '../../src/screen/firebase'; // Firebase Auth import

import Homescreen from '../../src/screen/Homescreen.jsx';
import LoginScreen from '../../src/screen/LoginScreen.jsx';
import  SignupScreen from '../../src/screen/SignupScreen.jsx';
import Dashboard from '../../src/screen/Dashboard.jsx';



const Stack = createNativeStackNavigator();


const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <ActivityIndicator size="large" />;

  return (
    <NavigationContainer independent={true}>
      {user ? (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <Stack.Screen name="Home" component={Homescreen} />
        )}
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