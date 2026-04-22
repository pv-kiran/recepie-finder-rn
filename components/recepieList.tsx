import RecipeCard from "@/components/common/RecipeCard";
import { Recipe } from "@/types/recipe";
import React from "react";
import { FlatList, View } from "react-native";

const RecepieList = ({ recipeList }: { recipeList: Recipe[] | undefined }) => {
  const renderRecipeList = ({ item }: { item: Recipe }) => {
    return <RecipeCard recipe={item} type="VERTICAL" />;
  };
  return (
    <View>
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRecipeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, padding: 2 }}
      />
    </View>
  );
};

export default RecepieList;
