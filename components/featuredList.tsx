import { images } from "@/assets/images";
import { Recipe } from "@/types/recipe";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
const FeaturedList = ({ recipeList }: { recipeList: Recipe[] }) => {
  const router = useRouter();
  const onClick = (recipe: number) => {
    router.push({
      pathname: "/recipe/[id]/receipe",
      params: { id: recipe },
    });
  };
  const renderFeaturedList = ({ item }: { item: Recipe }) => {
    return (
      <Pressable onPress={() => onClick(item.id)}>
        <View className="relative">
          <Image
            source={images.feautred}
            className="w-78 h-48 rounded-2xl"
            resizeMode="cover"
          />
          <View className="absolute p-4 gap-2 bottom-0">
            <Text
              numberOfLines={2}
              className="text-white text-lg font-bold w-58 leading-5">
              {item.title}
            </Text>
            <View className="flex-row justify-between items-center w-full">
              <View className="flex-row items-center gap-3">
                <Image
                  source={{ uri: item.image }}
                  className="w-8 h-8 rounded-full border border-amber-50"
                />
                <Text className="w-40 text-white" numberOfLines={1}>
                  {item.summary}
                </Text>
              </View>
              <View className="flex-row gap-2 items-center">
                <Ionicons name="heart" size={22} color="#fff" />
                <Text className="text-white">{item.aggregateLikes}</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFeaturedList}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
};

export default FeaturedList;
