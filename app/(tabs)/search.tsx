import { images } from "@/assets/images";
import Section from "@/components/section";
import { RECEPIE_DATA, Recipe } from "@/constants/recipies";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styled } from "nativewind";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);

const search = () => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", query);
  };
  const searchResult = ({ item }: { item: Recipe }) => {
    return (
      <View key={item.id}>
        <View className="bg-[#f1f6f5] shadow-sm gap-4 h-30 p-3 rounded-xl flex-row">
          <Image
            source={images.feautred}
            className="h-full w-2/6 rounded-2xl"
          />
          <View className="justify-center gap-4">
            <Text numberOfLines={2} className="font-bold text-xl w-[80%]">
              {item.name}
            </Text>
            <View className="flex-row gap-4">
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
      </View>
    );
  };
  return (
    <SafeArea className="flex-1" edges={["top"]}>
      <FlatList
        ListHeaderComponent={() => (
          <View className="gap-6">
            <View className="flex-row items-center">
              <Link href="/(tabs)/recipes">
                <Ionicons name="arrow-back" size={20} />
              </Link>
              <Text className="text-xl font-semibold text-center grow">
                Search
              </Text>
            </View>
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
            <Section title="Search results" />
          </View>
        )}
        data={RECEPIE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={searchResult}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, gap: 14 }}
      />
    </SafeArea>
  );
};

export default search;
