import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyledText,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import axios from "axios";

const CountriesScreen = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const data = axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        setCountries(data.data);
      });
  }, []);

  return (
    <View>
      <SearchInput />
      <View className="px-5">
        <Filter />
        <ScrollView className="mt-5 space-y-4" showsVerticalScrollIndicator={true}>
          {countries
            .sort()
            .map((country, id) => (
              <View key={id} className="flex-row">
                <Image
                  source={{ uri: country.flags.png }}
                  className="h-12 w-12 border-2 border-black rounded-lg"
                  // style={{ with: 200, height: 200 }}
                />
                <View className="flex-col ml-3">
                  <Text>{country.name.common}</Text>
                  <Text>{country.name.official}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CountriesScreen;
