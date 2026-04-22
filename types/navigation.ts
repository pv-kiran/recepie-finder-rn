import { Ionicons } from "@expo/vector-icons";

export interface TabItem {
  name: "home" | "search" | "favourites";
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export interface TabSwitchItem {
  key: string;
  label: string;
}
