import { CUISINE, CUISINES } from "@/constants/cuisines";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Section from "./section";

const CuisinesList = () => {
  const renderCuisines = ({ item }: { item: CUISINE }) => {
    return (
      <TouchableOpacity className="px-4 py-3 rounded-3xl min-w-25 items-center bg-[#e4eeee]">
        <Text className="text-center font-medium">{item.label}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View className="gap-4">
      <Section title="Category" actionText="See all" />
      <FlatList
        data={CUISINES}
        keyExtractor={(item) => item.key}
        renderItem={renderCuisines}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
};

export default CuisinesList;
