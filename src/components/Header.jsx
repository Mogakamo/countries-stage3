import { View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "react-native-heroicons/outline";

const Header = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <View className="flex-row items-center justify-between w-80 p-2 shadow-none">
      <View className="flex-row">
        <Text className="text-4xl font-bold">Explore</Text>
        <Text className="text-4xl text-red-500 ">.</Text>
      </View>
      <TouchableHighlight onPress={() => setDarkToggle(!darkToggle)}>
        {darkToggle ? (
          <SunIcon color="grey" fill="transparent" size={30} />
        ) : (
          <MoonIcon color="grey" />
        )}
      </TouchableHighlight>
    </View>
  );
};

export default Header;
