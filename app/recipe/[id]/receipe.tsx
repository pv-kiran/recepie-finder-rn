import { images } from "@/assets/images";
import ActionBtn from "@/components/common/ActionBtn";
import IngradiantImg from "@/components/common/IngradiantImg";
import TabSwitcher from "@/components/common/TabSwitcher";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import RecipeInfo from "@/components/RecipeInfo";
import { TAB_SWITCHERS } from "@/constants/tab";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { useRecipeDetails } from "@/hooks/useRecipes";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";

const SafeArea = styled(RNSafeArea);

const Recipe = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, error } = useRecipeDetails(Number(id));

  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const handleFavourite = () => {};

  const [activeTab, setActiveTab] = useState<string>("ingredients");

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Something went wrong</Text>;

  return (
    <SafeArea className="flex-1">
      <View className="flex-1 bg-white">
        <View className="h-72 relative">
          <Image
            source={{ uri: data?.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute top-0 w-full flex-row p-4 justify-between">
            <ActionBtn icon="arrow-back" action={() => handleBack()} />
            <ActionBtn icon="heart-outline" action={() => handleFavourite()} />
          </View>
        </View>
        <View className="flex-1 bg-white">
          <View className="flex-1 -mt-6 bg-[#FFF] rounded-t-[30px] overflow-hidden">
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                padding: 24,
                paddingBottom: 40,
                gap: 6,
              }}>
              <RecipeInfo
                title={data?.title}
                descrption={data?.summary}
                time={data?.cookingMinutes}
              />
              <View className="flex-row justify-between py-2">
                <IngradiantImg
                  source={images.carb}
                  label={`${data?.pricePerServing} carbs`}
                />
                <IngradiantImg
                  source={images.fat}
                  label={`${data?.servings}g fats`}
                />
              </View>
              <View className="flex-row justify-between">
                <IngradiantImg
                  source={images.protien}
                  label={`${data?.aggregateLikes}g protiens`}
                />
                <IngradiantImg
                  source={images.carb}
                  label={`${data?.servings}g Kcal`}
                />
              </View>
              <TabSwitcher
                tabs={TAB_SWITCHERS}
                activeTab={activeTab}
                onTabChange={(key) => {
                  setActiveTab(key);
                }}
              />

              {/* Render content based on active tab */}
              {activeTab === "ingredients" ? (
                <Ingredients ingradient={data?.extendedIngredients || []} />
              ) : (
                <Instructions
                  instructions={data?.analyzedInstructions[0].steps || []}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default Recipe;
