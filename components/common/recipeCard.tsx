import { images } from "@/assets/images";
import { Recipe } from "@/constants/recipies";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

const RecipeCard = ({
  recipe,
  type,
}: {
  recipe: Recipe;
  type: "VERTICAL" | "HORIZONTAL";
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/recipe/[id]/receipe",
      params: { id: recipe.id },
    });
  };

  return (
    <Pressable
      onPress={() => {
        handlePress();
      }}>
      <View key={recipe.id}>
        {type === "VERTICAL" ? (
          <View className="w-60 h-60 p-3 rounded-2xl bg-[#f1f6f5] shadow gap-3">
            <Image
              source={images.feautred}
              className="w-full h-[70%] rounded-xl"
            />
            <View className="gap-1">
              <Text
                numberOfLines={2}
                className="font-semibold leading-5 text-left text-[14px]">
                {recipe.name}
              </Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-2">
                  <Ionicons name="heart" size={18} color={"#6FAFB0"} />
                  <Text className="text-gray-400">{recipe.likes}</Text>
                </View>
                <View className="flex-row gap-2">
                  <Ionicons name="time-outline" size={18} color={"#6FAFB0"} />
                  <Text className="text-gray-400">{recipe.time}</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View className="bg-[#f1f6f5] shadow-sm p-3 rounded-xl flex-row items-center gap-3">
            <Image
              source={images.feautred}
              className="h-24 w-24 rounded-2xl shrink-0"
            />
            <View className="flex-1 gap-3">
              <Text numberOfLines={2} className="font-semibold text-lg">
                {recipe.name}
              </Text>
              <View className="flex-row gap-4">
                <View className="flex-row gap-2 items-center">
                  <Ionicons name="heart" size={18} color={"#6FAFB0"} />
                  <Text className="text-gray-400">{recipe.likes}</Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Ionicons name="time-outline" size={18} color={"#6FAFB0"} />
                  <Text className="text-gray-400">{recipe.time}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              className="bg-[#1e1d1d] items-center py-2 px-3 rounded-xl shrink-0"
              onPress={() => handlePress()}>
              <Ionicons name="arrow-forward" size={18} color={"#fff"} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default RecipeCard;
