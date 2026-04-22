import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

const IngradiantImg = ({
  source,
  label,
}: {
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View className="mb-1">
      <View className="flex-row w-3xs items-center gap-2">
        <Pressable className="rounded-lg p-2 bg-gray-200">
          <Image source={source} className="w-4 h-4" />
        </Pressable>
        <Text className="text-md text-gray-400">{label}</Text>
      </View>
    </View>
  );
};

export default IngradiantImg;
