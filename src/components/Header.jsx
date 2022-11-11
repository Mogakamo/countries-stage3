import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { SunIcon } from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="flex-row items-center justify-between w-80 p-2 shadow-none">
      <View className="flex-row">
      <Text className="text-4xl font-bold">Explore</Text>
      <Text className="text-4xl text-red-500 ">.</Text>
      </View>
      <TouchableHighlight>
        <SunIcon color="grey" fill="transparent" size={30} />
      </TouchableHighlight>
    </View>
  );
};

export default Header;
