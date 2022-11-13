import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Country = React.memo(({ navigation, country }, ...props) => {
  return (
    <TouchableOpacity className="flex-row" onPress={() => navigation.navigate('CountryDetails', country)}>
      <Image
      source={{uri: `${country.flag}`}}
        className="h-12 w-12 border-2 border-black rounded-lg"
      />
      <View className="flex-col ml-3">
        <Text>{country.name}</Text>
        <Text>{country.capital}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Country;
