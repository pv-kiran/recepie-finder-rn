import { Ionicons } from "@expo/vector-icons";

export interface TabItem {
  name: "recipes" | "search" | "favourites";
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}
