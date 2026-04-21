import RecipeCard from "@/components/common/RecipeCard";
import { RECEPIE_DATA, Recipe } from "@/constants/recipies";
import React from "react";
import { FlatList, View } from "react-native";

const RecepieList = () => {
  const renderRecipeList = ({ item }: { item: Recipe }) => {
    return <RecipeCard recipe={item} type="VERTICAL" />;
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
