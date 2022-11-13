import { View, Text, Pic, TouchableOpacity } from "react-native";
import React from "react";
import { FunnelIcon, GlobeAltIcon } from "react-native-heroicons/outline";

const Filter = () => {
  return (
    <View className="flex-row justify-between">
      <View className="flex-row items-center p-2 border-gray-500/10 rounded-md h-auto shadow-lg border-2 w-auto">
        <GlobeAltIcon color="grey" size={20} />
        <Text className="text-xs">EN</Text>
      </View>
      <TouchableOpacity className="flex-row items-center border-gray-500/10 rounded-md border-2 p-2">
        <FunnelIcon color="grey" size={20} />
        <Text className="text-xs">Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
