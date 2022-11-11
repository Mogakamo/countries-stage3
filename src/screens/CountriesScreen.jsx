import { View, Text } from "react-native";
import React from "react";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";

const CountriesScreen = () => {
  return (
    <View>
      <SearchInput />
      <View className="px-5">
        <Filter />
      </View>
    </View>
  );
};

export default CountriesScreen;
