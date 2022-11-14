import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAllCodesQuery } from "../services/countriesService";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

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
    timezones,
    car
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
      <View className="px-5 flex-row  items-center w-[100%] mt-2">
        <TouchableHighlight onPress={() => navigate.goBack()} className="bg-transparent">
          <ArrowLeftIcon color="black" size={20} />
        </TouchableHighlight>
        <Text className="justify-center items-center mx-auto font-bold text-[20px]">{name}</Text>
      </View>
      <ScrollView className="px-5">
        <Image
          source={{ uri: `${flag}` }}
          resizeMethod="auto"
          resizeMode="cover"
          className="mt-5 h-48 rounded-lg w-[100%]"
        />

        <View className="mt-3">
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Population: </Text>
            <Text className="text-[16px] font-light">{population?.toLocaleString('en-US')}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Region: </Text>
            <Text className="text-[16px] font-light">{region}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Capital: </Text>
            <Text className="text-[16px] font-light">{capital}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Timezone: </Text>
            <Text className="text-[16px] font-light">{timezones}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Driving Side: </Text>
            <Text className="text-[16px] font-light">{car}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Timezone: </Text>
            <Text className="text-[16px] font-light">{languages?.toString()}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-semibold text-[16px]">Timezone: </Text>
            <Text className="text-[16px] font-light">{timezones}</Text>
          </View>
          <Text>{car}</Text>

          <Text>{region}</Text>
          {/* <Text>Code: {countriesCodes.alpha3Code}</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryDetailsScreen;
