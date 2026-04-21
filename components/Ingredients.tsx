import { images } from "@/assets/images";
import React from "react";
import { Image, Text, View } from "react-native";
images;
const Ingredients = () => {
  return (
    <View className="shadow-xs rounded-xl py-2 px-4 flex-row items-center gap-4">
      <Image source={images.feautred} className="w-14 h-14 rounded-2xl" />
      <Text className="grow text-xl font-medium">Carrot</Text>
      <Text className="font-bold text-lg">12</Text>
    </View>
  );
};

export default Ingredients;
