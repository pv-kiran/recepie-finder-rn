import { images } from "@/assets/images";
import ActionBtn from "@/components/common/ActionBtn";
import IngradiantImg from "@/components/common/IngradiantImg";
import TabSwitcher from "@/components/common/TabSwitcher";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import RecipeInfo from "@/components/RecipeInfo";
import { recepie } from "@/constants/recipies";
import { TAB_SWITCHERS } from "@/constants/tab";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";

import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);

const Recipe = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const handleFavourite = () => {};

  const [activeTab, setActiveTab] = useState<string>("ingredients");

  return (
    <SafeArea className="flex-1">
      <View className="flex-1 bg-white">
        <View className="h-72 relative">
          <Image source={images.feautred} className="w-full h-full" />
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
                title={recepie.title}
                descrption={recepie.description}
                time={55}
              />
              <View className="flex-row justify-between py-2">
                <IngradiantImg source={images.carb} label="65g Carbs" />
                <IngradiantImg source={images.carb} label="65g Carbs" />
              </View>
              <View className="flex-row justify-between">
                <IngradiantImg source={images.carb} label="65g Carbs" />
                <IngradiantImg source={images.carb} label="65g Carbs" />
              </View>
              <TabSwitcher
                tabs={TAB_SWITCHERS}
                activeTab={activeTab}
                onTabChange={(key) => {
                  setActiveTab(key);
                }}
              />

              {/* Render content based on active tab */}
              {activeTab === "ingredients" ? <Ingredients /> : <Instructions />}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default Recipe;
