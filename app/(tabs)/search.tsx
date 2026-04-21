import PageHeader from "@/components/common/PageHeader";
import RecipeCard from "@/components/common/RecipeCard";
import SectionTitle from "@/components/common/SectionHeading";
import CuisinesList from "@/components/CuisinesList";
import SearchBar from "@/components/SearchBar";
import { RECEPIE_DATA, Recipe } from "@/constants/recipies";
import { styled } from "nativewind";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);

const search = () => {
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
        data={RECEPIE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={searchResult}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 14, gap: 16 }}
      />
    </SafeArea>
  );
};

export default search;
