import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Auth/Login';
import Register from '../Auth/Register';
import HomeScreen from '../Home/HomeScreen';
import ObservationForm from '../Observation/ObservationForm';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ObservationForm" component={ObservationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
