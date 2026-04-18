import { styled } from "nativewind";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);

const search = () => {
  return (
    <SafeArea className="flex-1">
      <View className="px-4">
        <Text>search</Text>
      </View>
    </SafeArea>
  );
};

export default search;
