import ScreenWrapper from "@/components/common/ScreenWrapper";
import SectionTitle from "@/components/common/SectionHeading";
import CuisinesList from "@/components/CuisinesList";
import FeaturedList from "@/components/FeaturedList";
import Greetings from "@/components/Greetings";
import RecepieList from "@/components/RecepieList";
import { useRecipes } from "@/hooks/useRecipes";

import React from "react";
import { ScrollView, Text, View } from "react-native";

const Home = () => {
  const { data, isLoading, error } = useRecipes();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Something went wrong</Text>;

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 gap-6">
          <Greetings />
          <View className="gap-4">
            <SectionTitle title="Featured" />
            <FeaturedList recipeList={data?.results || []} />
          </View>
          <View className="gap-4">
            <SectionTitle title="Category" actionText="See all" />
            <CuisinesList />
          </View>
          <View className="gap-4">
            <SectionTitle title="Popular Recipes" actionText="See All" />
            <RecepieList recipeList={data?.results || []} />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;
