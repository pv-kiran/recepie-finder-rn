import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/common/RecipeCard";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import { RECEPIE_DATA, Recipe } from "@/constants/recipies";
import React from "react";
import { FlatList, View } from "react-native";

const favourites = () => {
  const favouriteList = ({ item }: { item: Recipe }) => {
    return <RecipeCard recipe={item} type="HORIZONTAL" />;
  };
  return (
    <ScreenWrapper>
      <FlatList
        ListHeaderComponent={() => (
          <View className="gap-6">
            <PageHeader route="/(tabs)/home" title="Favourites" />
          </View>
        )}
        data={RECEPIE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={favouriteList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, gap: 16 }}
      />
    </ScreenWrapper>
  );
};

export default favourites;
