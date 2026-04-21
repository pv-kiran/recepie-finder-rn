import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import RenderHtml from "react-native-render-html";
const RecipeInfo = ({
  title,
  descrption,
  time,
}: {
  title: string;
  descrption: string;
  time: number;
}) => {
  const { width } = useWindowDimensions();
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text numberOfLines={2} className="w-3/4 text-lg font-semibold">
          {title}
        </Text>
        <View className="flex-row items-center gap-2">
          <Ionicons name="time-outline" size={18} color="gray" />
          <Text className="font-medium text-gray-400">{time} min</Text>
        </View>
      </View>
      <View>
        <RenderHtml
          contentWidth={width}
          source={{
            html: descrption,
          }}
          tagsStyles={{
            a: { color: "blue", textDecorationLine: "underline" },
            b: { fontWeight: "600" },
          }}
          baseStyle={{
            fontWeight: "300",
            fontSize: 14,
            color: "#747171",
            lineHeight: 18,
          }}
          defaultTextProps={{
            numberOfLines: expanded ? undefined : 3,
          }}
        />
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text className="text-blue-500 text-sm">
            {expanded ? "View Less" : "View More"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecipeInfo;
