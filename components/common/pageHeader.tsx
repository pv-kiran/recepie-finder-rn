import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const PageHeader = ({ route, title }: { route: Href; title: string }) => {
  return (
    <View className="flex-row items-center">
      <Link href={route}>
        <Ionicons name="arrow-back" size={20} />
      </Link>
      <Text className="text-2xl font-semibold text-center grow">{title}</Text>
    </View>
  );
};

export default PageHeader;
