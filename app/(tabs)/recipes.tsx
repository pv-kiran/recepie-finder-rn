import CuisinesList from "@/components/cuisinesList";
import FeaturedList from "@/components/featuredList";
import Greetings from "@/components/greetings";
import RecepieList from "@/components/recepieList";
import SectionTitle from "@/components/sectionHeading";

import { styled } from "nativewind";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";

const SafeArea = styled(RNSafeArea);

const Recipes = () => {
  return (
    <SafeArea className="flex-1" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 gap-6">
          <Greetings />
          <View className="gap-4">
            <SectionTitle title="Featured" />
            <FeaturedList />
          </View>
          <View className="gap-4">
            <SectionTitle title="Category" actionText="See all" />
            <CuisinesList />
          </View>
          <View className="gap-4">
            <SectionTitle title="Popular Recipes" actionText="See All" />
            <RecepieList />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default Recipes;
