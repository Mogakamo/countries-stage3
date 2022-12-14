import { useState } from "react";
import { View, TextInput } from "react-native";


const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState();

  onSearch(input)

  return (
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
  );
};

export default SearchInput;
