import { View, Text, TouchableHighlight, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/outline";
import { SelectList, MultipleSelectList } from "react-native-dropdown-select-list";
import { useDispatch } from "react-redux";
import { change, cleanAll } from "../features/filterSlice";
import Dropdown from "../components/Dropdown";

const regionList = [
  {
    label: "",
    value: "",
  },
  {
    label: "Africa",
    value: "Africa",
  },
  {
    label: "America",
    value: "Americas",
  },
  {
    label: "Asia",
    value: "Asia",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Oceania",
    value: "Oceania",
  },
];

const FilterScreen = () => {
  const [region, setRegion] = useState([]);
  const navigate = useNavigation();

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  const _handleClean = () => {
    setRegion(null);
    dispatch(cleanAll())
  };

  const _handleApply = () => {
    dispatch(change({
        region
    }))
    navigate.navigate("Home")
  }

  return (
    <SafeAreaView className="p-4">
      <View className="flex-row w-[100%] justify-between">
        <Text className="font-bold text-[20px]">Filters</Text>
        <TouchableHighlight>
          <XCircleIcon color="#98A2B3" />
        </TouchableHighlight>
      </View>
      <View className="py-8">
        <Dropdown label="Continents" />
        {/* <SelectList
          setSelected={(val) => setRegion(val)}
          data={regionList}
          save="value"
          label="Continents"
          searchPlaceholder=""
          defaultOption="Continents"
        /> */}
      </View>
      <View>
        <Button title="Apply" color="orange" onPress={_handleApply} />
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
