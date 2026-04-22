import { images } from "@/assets/images";
import { Ingredient } from "@/types/recipe";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
images;
const Ingredients = ({
  ingradient,
}: {
  ingradient: Ingredient[] | undefined;
}) => {
  const IngradientCard = ({ item }: { item: Ingredient }) => {
    return (
      <View className="shadow-sm rounded-xl py-2 px-4 flex-row items-center gap-4">
        <Image
          source={{
            uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`,
          }}
          className="w-14 h-14 rounded-2xl"
        />
        <Text className="grow text-xl font-medium">{item.name}</Text>
        <Text className="font-bold text-lg">{item.amount}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{ gap: 8, padding: 2 }}>
      {ingradient?.map((ingItem) => (
        <IngradientCard key={ingItem.name} item={ingItem} />
      ))}
    </ScrollView>
  );
};

export default Ingredients;
