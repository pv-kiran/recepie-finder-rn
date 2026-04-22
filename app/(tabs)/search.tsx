import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/common/RecipeCard";
import SectionTitle from "@/components/common/SectionHeading";
import CuisinesList from "@/components/CuisinesList";
import SearchBar from "@/components/SearchBar";
import { useRecipes } from "@/hooks/useRecipes";
import { Recipe } from "@/types/recipe";
import { styled } from "nativewind";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);

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
    <SafeArea className="flex-1" edges={["top"]}>
      <FlatList
        ListHeaderComponent={() => (
          <View className="gap-6">
            <PageHeader route="/(tabs)/recipes" title="Search" />
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
    </SafeArea>
  );
};

export default search;
