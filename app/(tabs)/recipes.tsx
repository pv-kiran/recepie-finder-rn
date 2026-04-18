import { images } from "@/assets/images";
import Greetings from "@/components/greetings";
import Section from "@/components/section";
import { DATA, RecipeItem } from "@/constants/feutured";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";

const SafeArea = styled(RNSafeArea);

const recipes = () => {
  const renderList = ({ item }: { item: RecipeItem }) => {
    return (
      <View className="relative">
        <Image
          source={item.image}
          className="w-85 h-56 rounded-2xl"
          resizeMode="cover"
        />
        <View className="absolute p-4 gap-2 bottom-0">
          <Text
            numberOfLines={2}
            className="text-white text-xl font-bold w-58 leading-5">
            Asian white noodle with extra seafood
          </Text>
          <View className="flex-row justify-between items-center w-full">
            <View className="flex-row items-center gap-3">
              <Image
                source={images.splash}
                className="w-8 h-8 rounded-full border border-amber-50"
              />
              <Text className="w-40 text-white" numberOfLines={1}>
                Red Lentil Soup with Chicken and Turnips
              </Text>
            </View>
            <View className="flex-row gap-2 items-center">
              <Ionicons name="time-outline" size={22} color="#fff" />
              <Text className="text-white">12:00</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeArea className="flex-1">
      <View className="p-4 gap-5">
        <Greetings />
        <Section title="Featured" />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderList}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
        />
      </View>
    </SafeArea>
  );
};

export default recipes;
