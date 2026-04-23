import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/common/RecipeCard";
import ScreenWrapper from "@/components/common/ScreenWrapper";
import SectionTitle from "@/components/common/SectionHeading";
import CuisinesList from "@/components/CuisinesList";
import SearchBar from "@/components/SearchBar";
import { useRecipes } from "@/hooks/useRecipes";
import { Recipe } from "@/types/recipe";
import React from "react";
import { FlatList, Text, View } from "react-native";

const search = () => {
  const { data, isLoading, error } = useRecipes({ number: 12 });

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  const searchResult = ({ item }: { item: Recipe }) => {
    return <RecipeCard recipe={item} type="HORIZONTAL" />;
  };
  return (
    <ScreenWrapper>
      <FlatList
        ListHeaderComponent={() => (
          <View className="gap-6">
            <PageHeader route="/(tabs)/home" title="Search" />
            <SearchBar />
            <CuisinesList />
            <SectionTitle title="Search results" />
          </View>
        )}
        data={data?.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={searchResult}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, gap: 16 }}
      />
    </ScreenWrapper>
  );
};

export default search;
