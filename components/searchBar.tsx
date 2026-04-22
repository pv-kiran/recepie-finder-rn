import FilterOptions from "@/components/common/FilterOptions";
import { CUISINES, DIETS, MEAL_TYPES } from "@/constants/filterOptions";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const handleSearch = () => {};

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
      <TouchableOpacity
        className="bg-[##6FAFB0] px-3 rounded-xl items-center justify-center"
        onPress={() => setIsModalVisible(true)}>
        <Ionicons name="filter" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true} //
        onRequestClose={() => setIsModalVisible(false)}>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setIsModalVisible(false)}
            className="flex-1 bg-black/50"
          />

          <View className="h-2/3 bg-white rounded-t-3xl p-6 gap-6">
            <FilterOptions options={MEAL_TYPES} title="Meals" />
            <FilterOptions options={CUISINES} title="Cuisines" />
            <FilterOptions options={DIETS} title="Diets" />
            <Pressable
              className="bg-[#6FAFB0] p-3 rounded-2xl"
              onPress={() => setIsModalVisible(false)}>
              <Text className="text-center font-medium text-[#fff]">
                Filter
              </Text>
            </Pressable>
          </View>
        </Modal>
      </Modal>
    </View>
  );
};

export default SearchBar;
