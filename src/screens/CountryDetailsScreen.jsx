import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAllCodesQuery } from "../services/countriesService";

const CountryDetailsScreen = ({ route }) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    flag,
    borders,
    tld,
    languages,
  } = route?.params || {};

  const navigate = useNavigation();

  const { data: countriesCodes } = useGetAllCodesQuery();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView className="px-5">
        <Image
          source={{ uri: `${flag}` }}
          resizeMethod="auto"
          resizeMode="cover"
          className="mt-5 h-48 rounded-lg w-[100%]"
        />

        <View>
          <Text>{name}</Text>
          <Text>{capital}</Text>
          <Text>{nativeName}</Text>
          <Text>{population}</Text>
          <Text>{region}</Text>
          <Text>{subregion}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryDetailsScreen;
