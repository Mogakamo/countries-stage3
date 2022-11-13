import { isEmpty } from "lodash";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
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

const CountriesScreen = () => {
  const [text, setText] = useState();
  const debouncedSearchTerm = useDebounce(text, 500);
  const { filterReducer } = useSelector((state) => state);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const navigation = useNavigation()

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

  const getCuntry = () => {}

  return (
    <View>
      <SearchInput onSearch={getCuntry}/>
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
          />
        )}
         {isEmpty(countries) && (
        <Text
          // visible={snackbarVisible}
          // onDismiss={() => setSnackbarVisible(false)}
          // duration={3000}
        >
          Countries not found!
        </Text>
      )}
      </View>
    </View>
  );
};

export default CountriesScreen;
