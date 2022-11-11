import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CountriesScreen from '../screens/CountriesScreen'
import CountryDetailsScreen from '../screens/CountryDetailsScreen'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={CountriesScreen} />
      <Stack.Screen name='Details' component={CountryDetailsScreen} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator