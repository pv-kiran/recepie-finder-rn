import Chip from "@/components/common/chip";
import { CUISINE, CUISINES } from "@/constants/cuisines";
import React from "react";
import { FlatList, View } from "react-native";

const CuisinesList = () => {
  const renderCuisines = ({ item }: { item: CUISINE }) => {
    return <Chip label={item.label} />;
  };
  return (
    <View>
      <FlatList
        data={CUISINES}
        keyExtractor={(item) => item.key}
        renderItem={renderCuisines}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />
    </View>
  );
};

export default CuisinesList;
