import { View, Text } from "react-native";
import React, { useState } from "react";
import { FunnelIcon, GlobeAltIcon } from "react-native-heroicons/outline";
import { Picker } from "@react-native-picker/picker";

const Filter = () => {
  const [region, setRegion] = useState();
  return (
    <View className="flex-row justify-between">
      <View className="flex-row items-center p-2 border-gray-500/10 rounded-md h-auto shadow-lg border-2 w-auto">
        <GlobeAltIcon color="grey" size={20} />
        <Text className="text-xs">EN</Text>
      </View>
      <Picker
        selectedValue={region}
        accessibilityLabel="Basic Picker Accessibility Label"
        onValueChange={(itemValue, itemIndex) => setRegion(itemValue)}
        // className="flex-row items-center border-gray-500/10 rounded-md border-2 p-2"
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="Java" value="java" />
      </Picker>
    </View>
  );
};

export default Filter;
