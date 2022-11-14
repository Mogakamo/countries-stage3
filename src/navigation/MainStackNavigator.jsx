import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import CountriesScreen from "../screens/CountriesScreen";
import CountryDetailsScreen from "../screens/CountryDetailsScreen";
import Header from "../components/Header";
import FilterScreen from "../screens/FilterScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CountriesScreen} options={{
        headerTitle: (props) => <Header />
      }} />
      <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
      <Stack.Screen name="Filters" component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
