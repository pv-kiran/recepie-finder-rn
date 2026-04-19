import { images } from "@/assets/images";
import { RECEPIE_DATA, Recipe } from "@/constants/recipies";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const RecepieList = () => {
  const renderRecipeList = ({ item }: { item: Recipe }) => {
    return (
      <View className="w-60 h-60 p-3 rounded-2xl bg-[#f1f6f5] shadow gap-3">
        <Image source={images.feautred} className="w-full h-[70%] rounded-xl" />
        <View className="gap-1">
          <Text
            numberOfLines={2}
            className="font-semibold leading-5 text-left text-[14px]">
            {item.name}
          </Text>
          <View className="flex-row justify-between items-center">
            <View className="flex-row gap-2">
              <Ionicons name="heart" size={18} color={"#6FAFB0"} />
              <Text className="text-gray-400">{item.likes}</Text>
            </View>
            <View className="flex-row gap-2">
              <Ionicons name="time-outline" size={18} color={"#6FAFB0"} />
              <Text className="text-gray-400">{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={RECEPIE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, padding: 2 }}
      />
    </View>
  );
};

export default RecepieList;
