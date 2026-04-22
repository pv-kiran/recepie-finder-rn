import { TabItem, TabSwitchItem } from "@/types/navigation";

export const TABS: TabItem[] = [
  {
    name: "home",
    title: "Home",
    icon: "restaurant",
  },
  {
    name: "search",
    title: "Search",
    icon: "search",
  },
  {
    name: "favourites",
    title: "Favourites",
    icon: "heart",
  },
];

export const TAB_SWITCHERS: TabSwitchItem[] = [
  { key: "ingredients", label: "Ingredients" },
  { key: "instructions", label: "Instructions" },
];
