import { isEmpty } from "lodash";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Country from "../components/Country";
import { useDebounce } from "../hooks/useDebounce";
import { useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "../services/countriesService";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Snackbar } from "react-native-paper";

const CountriesScreen = () => {
  const [text, setText] = useState();
  const [input, setInput] = useState();
  const debouncedSearchTerm = useDebounce(text, 500);
  const { filterReducer } = useSelector((state) => state);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const navigation = useNavigation();

  const memoizedRenderFunc = useCallback(
    ({ item: country }) => {
      return (
        <Country key={country.id} country={country} navigation={navigation} />
      );
    },
    [navigation]
  );

  const {
    data: countries,
    isLoading,
    isFetching,
  } = useGetAllCountriesQuery({ ...filterReducer, debouncedSearchTerm });

  useEffect(() => {
    if (isEmpty(countries) && !isLoading) {
      setSnackbarVisible(true);
    }
  }, [countries, isLoading]);

  useEffect(() => {
    if (isFetching) {
      setSnackbarVisible(false);
    }
  }, [isFetching]);

  const getCuntry = () => {};

  return (
    <View>
      <View className="py-2 px-5 my-4">
        <View className="p-2 items-center flex-row border-transparent bg-gray-400/40 space-x-3 border-gray-500 rounded-lg">
          <MagnifyingGlassIcon color="grey" fill="transparent" size={21} />
          <TextInput
            className="outline-none w-full h-full placeholder:text-lg placeholder:pl-16"
            placeholder="Search Country"
            value={input}
            onChangeText={(search_term) => setInput(search_term)}
          />
        </View>
      </View>
      <View className="px-5">
        <Filter />
        {(isLoading || isFetching) && (
          <ActivityIndicator size="large" animating={true} color="red" />
        )}

        {countries && !isFetching && !isLoading && (
          <FlatList
            data={countries}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            windowSize={7}
            renderItem={memoizedRenderFunc}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={false}
            className="mt-5"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
        {isEmpty(countries) && (
          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            duration={3000}
          >
            Countries not found!
          </Snackbar>
        )}
      </View>
    </View>
  );
};

export default CountriesScreen;
