import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyledText,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const CountriesScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const navigate = useNavigation();

  useEffect(() => {
    const data = axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => {
        setIsLoading(true);
        setCountries(data.data);
      });

    setIsLoading(false);
  }, []);

  // Get country by name
  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/all/name/${countryName}`
      );

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // setError(error.message);
    }
  };

  return (
    <View>
      <SearchInput onSearch={getCountryByName} />
      <View className="px-5">
        <Filter />
        <ScrollView
          className="mt-5 space-y-4"
          showsHorizontalScrollIndicator={true}
        >
          {countries.sort().map((country, id) => (
            <TouchableOpacity
              key={id}
              onPress={() => navigate.navigate("CountryDetails")}
              className="flex-row"
            >
              <Image
                source={{ uri: country.flags.png }}
                className="h-12 w-12 border-2 border-black rounded-lg"
                // style={{ with: 200, height: 200 }}
              />
              <View className="flex-col ml-3">
                <Text>{country.name.common}</Text>
                <Text>{country.name.official}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CountriesScreen;
