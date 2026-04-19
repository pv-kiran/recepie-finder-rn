import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const handleSearch = () => {
    console.log("Searching for:", query);
  };
  return (
    <View className="flex-row gap-2">
      <View className=" grow flex-row items-center border border-gray-300 rounded-xl px-2 py-1">
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search recipes..."
          className="flex-1 text-base"
        />

        <TouchableOpacity
          onPress={handleSearch}
          className="ml-2 px-4 py-2 rounded-lg">
          <Ionicons name="search" size={22} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-[##6FAFB0] px-3 rounded-xl items-center justify-center">
        <Ionicons name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
