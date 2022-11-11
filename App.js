import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import MainStackNavigator from "./src/navigation/MainStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStackNavigator />
    </NavigationContainer>
  );
}
