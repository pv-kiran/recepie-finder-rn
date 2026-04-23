import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SectionTitle = ({
  title,
  actionText,
}: {
  title: string;
  actionText?: string;
}) => {
  const router = useRouter();
  const onPress = () => {
    router.push("/(tabs)/search");
  };
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-2xl font-semibold">{title}</Text>
      {actionText && (
        <TouchableOpacity onPress={() => onPress()}>
          <Text className="text-[#6FAFB0] font-bold capitalize">
            {actionText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionTitle;
