import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Chip = ({ label, variant }: { label: string; variant: "md" | "sm" }) => {
  const variantClass = {
    md: "px-4 py-4",
    sm: "px-2 py-2",
  };
  return (
    <TouchableOpacity
      className={`${variantClass[variant]} rounded-3xl min-w-25 items-center bg-[#e4eeee]`}>
      <Text className="text-center font-medium">{label}</Text>
    </TouchableOpacity>
  );
};

export default Chip;
