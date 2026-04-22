import { InstructionStep } from "@/types/recipe";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Instructions = ({
  instructions,
}: {
  instructions: InstructionStep[];
}) => {
  const InstructionCard = ({
    instruction,
  }: {
    instruction: InstructionStep;
  }) => {
    return (
      <View className="bg-[#cbd0d1] p-2 rounded-lg">
        <Text className="text-[14px] font-semibold">{instruction.number}</Text>
        <Text className="text-[#f6f3f3] ">{instruction.step}</Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={{ gap: 6 }}>
      {instructions?.map((item) => {
        return <InstructionCard key={item.number} instruction={item} />;
      })}
    </ScrollView>
  );
};

export default Instructions;
