import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Chip = ({ label }: { label: string }) => {
  return (
    <TouchableOpacity className="px-4 py-4 rounded-3xl min-w-25 items-center bg-[#e4eeee]">
      <Text className="text-center font-medium">{label}</Text>
    </TouchableOpacity>
  );
};

export default Chip;
